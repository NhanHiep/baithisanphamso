# HỌC LIỆU SỐ HNUE — Website thống nhất

Gộp hai website tĩnh **Dấu ấn khoa học** và **Bơi ếch số** thành **một website**, sử dụng chung giao diện, thương hiệu và menu điều hướng. Không cần backend, không cần npm/build, phù hợp GitHub Pages.

## Cấu trúc

```text
index.html               Trang chủ chung
assets/css/portal.css    Giao diện chung (desktop/mobile)
assets/js/portal.js      Menu điều hướng dùng chung
assets/js/qrcode.js      Tạo QR offline
assets/images/           Ảnh trang chủ
nghien-cuu/              Hội thảo khoa học, kỷ yếu, bài báo, ảnh, video, trắc nghiệm
boi-ech/                 Lỗi kỹ thuật, kỹ thuật chuẩn, bài tập, trắc nghiệm, nhật ký, QR
```

## Mở website

- Cách nhanh: mở `index.html` trên máy tính. Một số chức năng liên quan đến URL/QR và quyền của trình duyệt hoạt động ổn định nhất khi truy cập qua HTTP(S).
- Cách chạy local: từ thư mục chứa `index.html`, chạy `python -m http.server 8000`, sau đó mở `http://localhost:8000/`.
- GitHub Pages: đưa **toàn bộ file và thư mục trong gói này** vào thư mục gốc của một repository GitHub. Trong `Settings → Pages`, chọn `Deploy from a branch`, `main`, `/ (root)`. Sau khi công bố, truy cập URL GitHub Pages tương ứng.

**Lưu ý:** không tải lên riêng các file `index.html`. Ảnh, video, CSS và JavaScript nằm trong các thư mục `assets` phải được giữ nguyên đường dẫn.

## Chức năng đã giữ lại

**Nghiên cứu:** lọc bài báo, đánh dấu bài bằng localStorage, xuất CSV, xem ảnh phóng to, video hội thảo, trắc nghiệm, tạo QR.

**Bơi ếch:** bốn lỗi L1–L4, kỹ thuật KTC1–KTC4, bài tập sửa sai, trắc nghiệm, phiếu luyện tập tại trình duyệt, xuất CSV, xem video theo tốc độ, QR bài học.

## Dữ liệu và lưu ý chuyên môn

- Dữ liệu đánh dấu, kết quả và nhật ký chỉ lưu trên trình duyệt đang sử dụng, không tự đồng bộ giữa thiết bị.
- PDF kỷ yếu được dẫn bằng liên kết ra website Khoa GDTC và cần Internet.
- Tên bài báo, thông tin hội thảo và nội dung kỹ thuật được giữ từ hai bộ nguồn đã cung cấp. Website là học liệu tham khảo; hình/video bơi ếch không mặc định là tiêu chuẩn kỹ thuật đã được thẩm định.
- Khi đưa vào sử dụng chính thức, nên rà soát bản quyền tư liệu, tính chính xác nguồn và cơ chế xử lý dữ liệu cá nhân.
