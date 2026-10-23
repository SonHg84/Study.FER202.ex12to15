import { useEffect, useState } from 'react';
export default function ValidatedInput({ validationFunction, errorMessage }) {
  // 1. State: value là đầu vào; isValid được effect cập nhật theo validationFunction.
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  // Bài này chủ ý dùng effect để minh họa validation khi dependency thay đổi.
  useEffect(() => {
    setIsValid(validationFunction(value));
  }, [value, validationFunction]);

  // JSX: render giao diện từ state/props và gắn handler cho các thao tác.
  return (
    <>
      <label className="form-label d-block">
        Tên đăng nhập
        <input
          className={`form-control ${value && !isValid ? 'is-invalid' : ''}`}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-invalid={Boolean(value && !isValid)}
          aria-describedby="effect-validation-message"
        />
      </label>
      <p
        id="effect-validation-message"
        className={value && !isValid ? 'text-danger' : 'text-muted'}
        role={value && !isValid ? 'alert' : undefined}
      >
        {value ? (isValid ? 'Thông tin hợp lệ.' : errorMessage) : 'Nhập tên để kiểm tra.'}
      </p>
    </>
  );
}
