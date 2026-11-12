# WEBSITE GIỚI THIỆU VÀ TẢI ỨNG DỤNG F&B SMART V5.1

Bộ mã nguồn website giới thiệu chính thức sản phẩm **F&B SMART V5.1** được xây dựng độc lập, hiện đại, chuyên nghiệp và tuân thủ tuyệt đối các nguyên tắc của dự án.

## 1. Cấu trúc thư mục website (`website/`)
- `index.html`: Trang chủ chính thức, tích hợp đầy đủ các khu vực theo yêu cầu (Hero, Download, Features, ROI Calculator, Comparison, Pricing, Guides & FAQ, Demo Registration Form, Sticky Download Bar, Footer).
- `404.html`: Trang lỗi 404 thân thiện.
- `robots.txt`: File cấu hình bot tìm kiếm SEO.
- `sitemap.xml`: Sơ đồ trang web chuẩn SEO.
- `css/style.css`: Bảng định dạng style hiện đại, glassmorphism, responsive mượt mà.
- `js/main.js`: Mã lệnh xử lý tương tác (Sticky navbar/download bar, ROI Calculator động, form validation, FAQ accordion).

## 2. Hướng dẫn chạy thử (Local Execution)
1. Mở thư mục `website/` bằng bất kỳ trình duyệt web nào (mở file `index.html`).
2. Hoặc sử dụng Live Server trên Visual Studio Code / Android Studio để chạy thử nghiệm môi trường local.

## 3. Hướng dẫn cập nhật nội dung
- Nội dung văn bản được tổ chức rõ ràng trong `index.html`.
- Các đường dẫn tải ứng dụng (Google Play, App Store, Windows Installer) hiện được đánh dấu trạng thái "Đang cập nhật" / "Chờ phát hành" đúng theo nguyên tắc không tạo liên kết giả khi chưa có URL chính thức từ PO. Khi có URL chính thức, chỉ cần thay thế thuộc tính `href` của các nút tương ứng.

## 4. Kiểm thử đã thực hiện
- Giao diện responsive trên mọi thiết bị (Mobile, Tablet, Desktop).
- Công cụ tính toán ROI hoạt động động với thanh trượt trực quan, hiển thị minh bạch các thông số do người dùng nhập.
- Form đăng ký Demo kiểm tra định dạng số điện thoại Việt Nam và thông báo trạng thái chờ kết nối API backend (không báo thành công giả).
- Không chứa dữ liệu nhạy cảm frontend, không có liên kết tải giả.
