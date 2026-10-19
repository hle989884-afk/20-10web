# Little Bloom · Website 20/10

Landing page React + Vite, phong cách pastel hồng Pascal và oải hương. Responsive mobile-first, có thư chúc, cards lời chúc, gallery lightbox, form demo và ba mức hiệu ứng.

## Yêu cầu
- Node.js 20+ (khuyến nghị bản LTS)
- npm

## Chạy local
```bash
npm install
npm run dev
```
Mở URL Vite in trên terminal (thường là `http://localhost:5173`).

## Build production
```bash
npm run build
npm run preview
```

## Lint và format
```bash
npm run lint
npm run format
```

## Cấu trúc
```text
2010-gift-website/
├── public/
│   └── petal.svg
├── src/
│   ├── main.jsx
│   └── styles/
│       ├── theme.css
│       └── global.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── .prettierrc.json
```

## Ba biến thể animation
- **Nhẹ (`Nhẹ`)**: giảm mật độ và độ đậm cánh hoa, gradient đứng yên, chuyển động chậm.
- **Trung bình (`Vừa`)**: mặc định, gradient chuyển động nhẹ, cánh hoa rơi và sticker bay bồng bềnh.
- **Mạnh (`Mạnh`)**: nhiều cánh hoa hơn, card và gradient chuyển động rõ hơn.
- Hệ thống tôn trọng `prefers-reduced-motion` để hạn chế chuyển động khi người dùng yêu cầu giảm hiệu ứng.

## Tùy chỉnh
- Màu sắc và font variables: `src/styles/theme.css`.
- Sửa thư chúc, lời chúc và ảnh: đầu file `src/main.jsx`.
- Gallery hiện dùng ảnh Unsplash từ xa để demo. Khi triển khai thực tế, hãy dùng ảnh bạn có quyền sử dụng hoặc ảnh riêng và giữ `loading="lazy"` cho ảnh không nằm ở hero.
- Form lời chúc hiện chỉ là demo giao diện; chưa lưu hoặc gửi dữ liệu đến server.
- Hiệu ứng được viết bằng CSS, không cần GSAP/Lottie cho phiên bản này.

## Accessibility / hiệu năng
- Semantic sections, nhãn form, trạng thái gửi dùng `role="status"`, điều khiển lightbox bằng nút và phím Escape/mũi tên.
- Ảnh gallery dùng lazy loading; hero image dùng `fetchPriority="high"`.
- Có focus ring cho keyboard, và media query `prefers-reduced-motion`.
- Nội dung chính dùng màu chữ tối trên nền sáng. Hãy kiểm tra lại độ tương phản nếu thay đổi palette.
