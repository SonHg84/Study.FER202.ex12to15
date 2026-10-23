import { act, fireEvent, render, screen } from '@testing-library/react';
import UserPosts from './components/UserPosts';
import CountdownTimer from './components/CountdownTimer';
import WindowSize from './components/WindowSize';
import ValidatedInput from './components/ValidatedInput';

afterEach(() => {
  jest.restoreAllMocks();
  jest.useRealTimers();
});
test('request user cũ bị abort và kết quả chậm không ghi đè user mới', async () => {
  let resolveOld;
  global.fetch = jest
    .fn()
    .mockImplementationOnce(
      () =>
        new Promise((resolve) => {
          resolveOld = resolve;
        }),
    )
    .mockResolvedValueOnce({
      ok: true,
      json: async () => [{ id: 2, title: 'User 2 post', body: 'Mới' }],
    });
  const view = render(<UserPosts userId={1} />);
  const oldSignal = global.fetch.mock.calls[0][1].signal;
  view.rerender(<UserPosts userId={2} />);
  expect(oldSignal.aborted).toBe(true);
  await screen.findByText('User 2 post');
  await act(async () =>
    resolveOld({
      ok: true,
      json: async () => [{ id: 1, title: 'Old post', body: 'Cũ' }],
    }),
  );
  expect(screen.queryByText('Old post')).not.toBeInTheDocument();
  expect(screen.getByText('User 2 post')).toBeInTheDocument();
});
test('fetch lỗi HTTP hiển thị lỗi và retry thành công', async () => {
  global.fetch = jest
    .fn()
    .mockResolvedValueOnce({ ok: false, status: 500 })
    .mockResolvedValueOnce({ ok: true, json: async () => [] });
  render(<UserPosts userId={1} />);
  expect(await screen.findByRole('alert')).toHaveTextContent('HTTP 500');
  fireEvent.click(screen.getByRole('button', { name: 'Thử lại' }));
  await screen.findByText('Người dùng này chưa có bài viết.');
});
test('countdown dừng ở 0, restart và hủy timer khi unmount', () => {
  jest.useFakeTimers();
  const view = render(<CountdownTimer initialValue={2} />);
  act(() => jest.advanceTimersByTime(1000));
  expect(screen.getByText('Time Remaining: 1')).toBeInTheDocument();
  act(() => jest.advanceTimersByTime(1000));
  expect(screen.getByText('Time Remaining: 0')).toBeInTheDocument();
  expect(jest.getTimerCount()).toBe(0);
  fireEvent.click(screen.getByRole('button', { name: 'Restart countdown' }));
  expect(screen.getByText('Time Remaining: 2')).toBeInTheDocument();
  view.unmount();
  expect(jest.getTimerCount()).toBe(0);
});
test('resize cập nhật kích thước và gỡ đúng listener', () => {
  const add = jest.spyOn(window, 'addEventListener');
  const remove = jest.spyOn(window, 'removeEventListener');
  const view = render(<WindowSize />);
  const listener = add.mock.calls.find(([type]) => type === 'resize')[1];
  const oldWidth = window.innerWidth;
  window.innerWidth = 640;
  fireEvent(window, new Event('resize'));
  expect(screen.getByText(/Window size: 640/)).toBeInTheDocument();
  view.unmount();
  expect(remove).toHaveBeenCalledWith('resize', listener);
  window.innerWidth = oldWidth;
});
test('validation phản hồi khi giá trị thay đổi', () => {
  render(
    <ValidatedInput
      validationFunction={(value) => value.length >= 3}
      errorMessage="Tối thiểu 3 ký tự"
    />,
  );
  fireEvent.change(screen.getByLabelText('Tên đăng nhập'), { target: { value: 'ab' } });
  expect(screen.getByRole('alert')).toHaveTextContent('Tối thiểu 3 ký tự');
  fireEvent.change(screen.getByLabelText('Tên đăng nhập'), { target: { value: 'abc' } });
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});
