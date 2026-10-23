# FER202 · EX12–15

Một project Create React App, một `package.json`, chứa đúng các bài EX12 đến EX15. Chủ đề: React Hooks.

## Chạy project

Mở terminal trong thư mục `ex12to15`:

```powershell
npm install
npm start
```

Mở [http://localhost:3000](http://localhost:3000). Trang đầu tự mở EX12; chọn bài khác từ menu. Cổng được đặt trong `.env` để cả 3 project có thể chạy cùng lúc.

## Khởi tạo bằng Create React App

Các lệnh sau dùng để tạo project mới từ thư mục cha. Với project đã có sẵn, dùng các lệnh chạy ở trên.

```powershell
npx create-react-app ex12to15 --use-npm
cd ex12to15
npm install bootstrap react-router-dom@6
npm start
```

Cách khởi tạo theo [Create React App](https://create-react-app.dev/docs/getting-started/). `ex12to15` tiếp tục project CRA đã có; hai project còn lại được khởi tạo bằng lệnh `npx create-react-app`.

## Các bài trong package

| Bài  | Nội dung   | URL                                          |
| ---- | ---------- | -------------------------------------------- |
| EX12 | useState   | [Mở bài](http://localhost:3000/exercises/12) |
| EX13 | useEffect  | [Mở bài](http://localhost:3000/exercises/13) |
| EX14 | useContext | [Mở bài](http://localhost:3000/exercises/14) |
| EX15 | useReducer | [Mở bài](http://localhost:3000/exercises/15) |

## Cấu trúc

```text
src/
  App.js                  # Điều phối các bài trong package
  app/                    # Menu, catalog và khung bài học
  exercises/
    exercise-12/        # Component và README của EX12
    exercise-13/        # Component và README của EX13
    exercise-14/        # Component và README của EX14
    exercise-15/        # Component và README của EX15
  shared/                 # Thành phần hoặc dữ liệu dùng trong package
public/images/            # Ảnh cục bộ
docs/REVIEW_GUIDE.md       # Kịch bản demo
```

Mỗi bài có component riêng, state và cleanup riêng. Chuyển bài sẽ reset state của bài trước. Project tự chứa source, ảnh và dependency, có thể sao chép riêng để chạy.

## Kiểm tra

```powershell
npm run build
npm run test:ci
npm run format:check
```

EX13 gọi JSONPlaceholder nên cần Internet để tải bài viết. Có trạng thái loading, lỗi, thử lại và hủy request cũ.

Đọc [hướng dẫn trình bày](docs/REVIEW_GUIDE.md) và README trong từng thư mục bài tập để đối chiếu đề Word và slide.
