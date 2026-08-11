# Personal Portfolio & CV Website (React + Vite)

> **Alex Nguyễn - Frontend Developer Intern Portfolio**  
> Website CV Cá Nhân hiện đại, responsive 100% được xây dựng bằng **React.js**, **React Router v6**, **Framer Motion** và **Vanilla CSS**.

---

## 🌟 Tính Năng Nổi Bật

1. **Routing & Điều Hướng (React Router v6)**:
   - 5 Routes chính: `/` (Trang chủ), `/resume` (Hồ sơ CV), `/skills` (Kỹ năng), `/projects` (Dự án), `/contact` (Liên hệ) và trang `/404` custom.
   - Thẻ `Navbar` phản hồi theo Route hiện tại (Active State).
   - Tự động cuộn lên đầu trang (`ScrollToTop`) khi chuyển route.

2. **Animation Chuyển Trang (Route Transitions)**:
   - 2 dạng hiệu ứng chuyển hướng mượt mà sử dụng **Framer Motion** (`Fade + Slide Up` & `Scale Zoom Blur`).
   - Tự động kích hoạt khi chuyển đổi qua Navbar hoặc các nút Call-to-Action (CTA).

3. **Giao Diện & Chế Độ Dark / Light Mode**:
   - Quản lý theme bằng `ThemeContext`, tự động lưu trạng thái lựa chọn vào `localStorage` và tự nhận biết cài đặt hệ điều hành.
   - Thiết kế chuẩn **Glassmorphism**, typography hiện đại từ Google Fonts (Plus Jakarta Sans & Space Grotesk).

4. **Dự Án Data-Driven + Tìm Kiếm & Lọc (Projects Page)**:
   - Dữ liệu dự án lưu tại `src/data/projectsData.js` và render bằng `.map()`.
   - Tìm kiếm thời gian thực theo tên dự án, mô tả hoặc công nghệ.
   - Lọc dự án theo thẻ công nghệ (React, Fullstack, UI/UX).
   - Trạng thái nút Demo: Tự động hiển thị trạng thái disabled + tooltip "Chưa triển khai" đối với các dự án chưa có demo URL.

5. **Form Liên Hệ Chuẩn UX & Validate (Contact Page)**:
   - Controlled Form gồm 4 ô input: Họ tên, Email, Tiêu đề và Nội dung tin nhắn.
   - Validate chi tiết trực tiếp từng field: bắt buộc nhập, đúng định dạng Email, tin nhắn tối thiểu 20 ký tự.
   - Trạng thái UX: Hiển thị lỗi đỏ dưới chân field, Spinner Loading 1.5s, vô hiệu hóa nút submit khi gửi và màn hình thành công kèm hiệu ứng Pháo hoa Confetti. Không sử dụng `alert()`.

6. **Accessibility & Responsive**:
   - Cấu trúc ngữ nghĩa HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>`).
   - Mobile Hamburger Menu hỗ trợ tương thích phím bấm (`Escape` key, `aria-expanded`, `htmlFor` labels).
   - Phản hồi tốt trên Mobile (<768px), Tablet (768-1024px) và Desktop (>1024px).

---

## 🛠️ Công Nghệ Sử Dụng

- **Frontend Core**: React 18, Vite 5, JavaScript ES6+
- **Routing**: React Router v6
- **Animation**: Framer Motion 11, Canvas Confetti
- **Icons**: Lucide React
- **Styling**: Modern Vanilla CSS, CSS Variables, Glassmorphism
- **Fonts**: Plus Jakarta Sans, Space Grotesk (Google Fonts)

---

## 📁 Cấu Trúc Thư Mục

```text
src/
├── assets/             # Hình ảnh & Tệp tĩnh
├── components/         # Các Component tái sử dụng
│   ├── Navbar.jsx      # Header, Navigation bar & Mobile menu
│   ├── Footer.jsx      # Footer trang
│   ├── ScrollToTop.jsx # Tự động cuộn trang khi sang Route mới
│   ├── PageWrapper.jsx# Animation wrapper chuyển trang với Framer Motion
│   ├── ProjectCard.jsx # Thẻ hiển thị dự án & tooltip
│   └── BackToTopButton.jsx # Nút cuộn lên đầu trang
├── context/
│   └── ThemeContext.jsx# Quản lý Dark/Light Mode
├── data/               # Dữ liệu tách biệt dạng JS
│   ├── personalInfo.js # Thông tin CV, Học vấn, Kinh nghiệm, Hoạt động
│   ├── skillsData.js   # Kỹ năng Technical, Soft skills, Ngoại ngữ
│   └── projectsData.js # Danh sách dữ án & tags
├── pages/              # 5 Routes chính & Trang 404
│   ├── Home.jsx
│   ├── Resume.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── NotFound.jsx
├── App.jsx             # Cấu hình Router & Layout chính
├── main.jsx            # Entry point ứng dụng
└── index.css           # Design system & CSS Variables
```

---

## 🚀 Hướng Dẫn Cài Đặt & Khởi Chạy

### 1. Cài đặt các gói phụ thuộc (Dependencies)
```bash
npm install
```

### 2. Chạy môi trường phát triển (Dev Server)
```bash
npm run dev
```
Trang web sẽ tự động mở tại địa chỉ `http://localhost:3000`.

### 3. Đóng gói sản phẩm (Production Build)
```bash
npm run build
```

---

© 2026 Alex Nguyễn. All rights reserved.
