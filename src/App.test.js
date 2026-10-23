import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import exercises from './app/exerciseCatalog';

function open(path) {
  return render(
    <MemoryRouter
      initialEntries={[path]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  );
}
beforeEach(() => {
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, title: 'Post kiểm tra', body: 'Nội dung' }],
  });
});
afterEach(() => {
  jest.restoreAllMocks();
});

test.each(exercises.map(({ id, title }) => [id, title]))(
  'bài %s hiển thị đúng module %s',
  async (id, title) => {
    const log = jest.spyOn(console, 'log').mockImplementation(() => {});
    open(`/exercises/${id}`);
    expect(screen.getByRole('heading', { name: title, level: 1 })).toBeInTheDocument();
    if (id === '13') await screen.findByText('Post kiểm tra');
    expect(
      screen.getByRole('navigation', { name: 'Danh sách bài tập' }),
    ).toBeInTheDocument();
    log.mockRestore();
  },
);

test('trang đầu và menu chỉ chứa đúng nhóm bài của package', () => {
  open('/');
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
  const menu = screen.getByRole('navigation', { name: 'Danh sách bài tập' });
  expect(within(menu).getAllByRole('link')).toHaveLength(exercises.length);
  fireEvent.click(
    within(menu).getByRole('link', {
      name: new RegExp(exercises[exercises.length - 1].id + ' '),
    }),
  );
  expect(
    screen.getByRole('heading', {
      name: exercises[exercises.length - 1].title,
      level: 1,
    }),
  ).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Tìm bài tập'), {
    target: { value: exercises[0].id },
  });
  expect(within(menu).getAllByRole('link')).toHaveLength(1);
});

test('route ngoài nhóm có liên kết quay về bài đầu', () => {
  open('/exercises/01');
  expect(screen.getByRole('heading', { name: 'Không tìm thấy bài' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Về bài ' + exercises[0].id }));
  expect(
    screen.getByRole('heading', { name: exercises[0].title, level: 1 }),
  ).toBeInTheDocument();
});
test('bài 12: toggle, màu và đổi thứ tự bằng kéo thả và nút', () => {
  open('/exercises/12');
  expect(screen.queryByText('Toggle me!')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Show' }));
  expect(screen.getByText('Toggle me!')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Hide' }));
  expect(screen.queryByText('Toggle me!')).not.toBeInTheDocument();
  fireEvent.change(screen.getByLabelText('Select a color'), {
    target: { value: 'blue' },
  });
  expect(screen.getByTestId('color-preview')).toHaveStyle({ background: 'blue' });
  const row1 = screen.getByText('⠿ Item 1').closest('li');
  const row3 = screen.getByText('⠿ Item 3').closest('li');
  fireEvent.dragStart(row1, { dataTransfer: { setData: jest.fn() } });
  fireEvent.dragOver(row3);
  fireEvent.drop(row3);
  const list = row1.closest('ul');
  expect(
    within(list)
      .getAllByRole('listitem')
      .map((li) => li.querySelector('span').textContent),
  ).toEqual(['⠿ Item 2', '⠿ Item 3', '⠿ Item 1', '⠿ Item 4', '⠿ Item 5']);
  fireEvent.click(screen.getByRole('button', { name: 'Đưa Item 1 lên' }));
  expect(within(list).getAllByRole('listitem')[1]).toHaveTextContent('Item 1');
});

test('bài 14: thêm món trùng, remove, clear và theme cập nhật realtime', () => {
  open('/exercises/14');
  fireEvent.click(screen.getByRole('button', { name: 'Toggle Theme' }));
  expect(screen.getByText('Theme: dark')).toBeInTheDocument();
  for (let i = 0; i < 2; i++)
    fireEvent.click(screen.getByRole('button', { name: 'Add to Cart: Uthappizza' }));
  fireEvent.click(screen.getByRole('button', { name: 'Add to Cart: Zucchipakoda' }));
  expect(screen.getByRole('status')).toHaveTextContent('Giỏ hàng: 3 món · Tổng: $11.97');
  fireEvent.click(screen.getByRole('button', { name: 'Remove Uthappizza' }));
  expect(screen.getByRole('status')).toHaveTextContent('1 món · Tổng: $1.99');
  fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
  expect(screen.getByRole('status')).toHaveTextContent('0 món · Tổng: $0.00');
});

test('bài 15: không next khi chưa chọn, tính điểm đúng và restart sạch', () => {
  open('/exercises/15');
  expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Canberra' }));
  fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  expect(screen.getByRole('button', { name: 'Next' })).toBeDisabled();
  fireEvent.click(screen.getByRole('button', { name: 'Mars' }));
  fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  expect(screen.getByText('Your Score: 2/2')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Restart Quiz' }));
  expect(screen.getByText('Question 1')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Sydney' }));
  fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  fireEvent.click(screen.getByRole('button', { name: 'Venus' }));
  fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  expect(screen.getByText('Your Score: 0/2')).toBeInTheDocument();
});
