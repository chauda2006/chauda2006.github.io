# NEON ART UNIVERSE — IT PORTFOLIO WEBSITE
> **Portfolio cá nhân & Creative Lab của Châu Tiến Đạt | IT Student · Developer · Digital Art Enthusiast**  
> **Chủ đề nghệ thuật:** Neon line art × Cyber-luxury × Digital painting  
> **Bảng màu chủ đạo:** Crimson Red 🔴 (`#FF244F`) + Emerald Green 🟢 (`#38FF91`) + Obsidian Black ⚫ (`#07090B`)  
> **Tagline:** *Where Logic Meets Imagination.*

---

## 🌌 01. Giới thiệu tổng quan (Overview)

**Neon Art Universe** là website portfolio cá nhân được thiết kế và xây dựng theo định hướng giao thoa giữa **kỹ thuật lập trình chuẩn mực** và **tính thẩm mỹ điện toán tương lai (cyber-luxury)**.

Website tạo ấn tượng thị giác mạnh mẽ với các đường nét neon contour, các bánh răng cơ khí quay chậm tượng trưng cho tư duy logic, hệ thống hạt năng lượng obsidian, bảng điều khiển HUD tối giản và các dự án kỹ thuật thực tế (Aura Beats, Student Event Management System,...).

---

## 🎨 02. Hệ thống Thiết kế & Bảng màu (Design System)

| Thành phần | Tên màu | Mã HEX | Mục đích sử dụng |
|---|---|---|---|
| **Nền chính** | Obsidian Black ⚫ | `#07090B` | Nền điện ảnh sâu thẳm, tạo chiều sâu thị giác |
| **Nền phụ / Thẻ** | Graphite | `#11151A` | Các thẻ dự án, khối nội dung, glass panels |
| **Điểm nhấn đỏ** | Neon Crimson 🔴 | `#FF244F` | Bản sắc, nút kêu gọi hành động quan trọng (CTA), năng lượng |
| **Đỏ trầm** | Dark Crimson | `#8C1735` | Đổ bóng, gradient viền |
| **Điểm nhấn xanh** | Neon Emerald 🟢 | `#38FF91` | Trạng thái active, dữ liệu kỹ thuật, liên kết tương tác |
| **Xanh rừng** | Forest Emerald | `#087A4A` | Gradient phát sáng thứ cấp |
| **Văn bản chính** | Ice White | `#F4F6F8` | Tiêu đề chính và nội dung quan trọng |
| **Văn bản phụ** | Silver Gray | `#A3ABB5` | Mô tả, thông số và metadata |

---

## 🚀 03. Cấu trúc Dự án (Project Structure)

```text
chauda2006.github.io/
├── index.html                      # Trang chủ portfolio chính (Semantic HTML5, SEO)
├── README.md                       # Tài liệu hướng dẫn dự án
├── LICENSE                         # Giấy phép nguồn mở MIT
├── .gitignore                      # Cấu hình bỏ qua tệp tạm
├── NEON_ART_UNIVERSE_IT_PORTFOLIO_GIT.md # Bản đặc tả kế hoạch sáng tạo ban đầu
├── assets/
│   ├── icons/                      # Bộ icon SVG vector độc quyền
│   │   ├── gear.svg                # Biểu tượng bánh răng cơ khí
│   │   ├── circuit.svg             # Mạch điện tử
│   │   ├── code.svg                # Khối mã nguồn
│   │   ├── database.svg            # Cơ sở dữ liệu
│   │   └── server.svg              # Máy chủ backend
│   └── images/
│       ├── profile-avatar.svg      # Avatar phong cách cyber-lineart của Châu Tiến Đạt
│       ├── aura-beats-preview.svg  # Mockup giao diện dự án Aura Beats
│       ├── student-events-preview.svg # Mockup hệ thống quản lý sự kiện sinh viên
│       ├── visualizer-preview.svg  # Giao diện mô phỏng thuật toán Cyber-Matrix
│       ├── portfolio-core-preview.svg # Bản vẽ kiến trúc Neon Art Universe
│       └── gallery/                # Triển lãm nghệ thuật số (Digital Art Gallery)
│           ├── art-gear-core.svg       # Tác phẩm: Cybernetic Gear Core
│           ├── art-crimson-drift.svg   # Tác phẩm: Neon Crimson Drifter
│           ├── art-emerald-stream.svg  # Tác phẩm: Emerald Data Stream
│           ├── art-blueprint.svg       # Tác phẩm: Obsidian Labyrinth
│           ├── art-synapse.svg         # Tác phẩm: Synapse & Silicon
│           └── art-aurora.svg          # Tác phẩm: Aurora Protocol
├── css/
│   ├── style.css                   # Định kiểu giao diện, layout lưới, glassmorphism, responsive
│   └── animations.css              # Hệ thống chuyển động (Kinetic), xoay bánh răng, glow, reduced motion
└── js/
    ├── main.js                     # Quản lý Canvas hạt, âm thanh Web Audio, thanh điều hướng, cuộn trang
    ├── projects.js                 # Lọc danh mục dự án & Modal chi tiết Case Study
    └── gallery.js                  # Lightbox xem tranh vẽ độ phân giải cao & phím điều hướng
```

---

## 🛠️ 04. Công nghệ sử dụng (Tech Stack)

- **Ngôn ngữ cốt lõi:** HTML5 ngữ nghĩa, CSS3 hiện đại (CSS Variables, Flexbox, Grid), JavaScript thuần (ES6+).
- **Đồ họa & Vector:** 100% SVG Vector nội bộ (sắc nét trên mọi màn hình Retina/4K, tải trang tức thì, dung lượng siêu nhẹ).
- **Hiệu ứng âm thanh:** Web Audio API tự tổng hợp sóng âm vi mô khi tương tác (không cần tải tệp mp3 nặng).
- **Tối ưu hóa hiệu năng:**
  - GPU-accelerated CSS `transform` & `opacity`.
  - Tần số khung hình đạt chuẩn 60 FPS mượt mà.
  - Tuân thủ tiêu chuẩn trợ năng `prefers-reduced-motion` cho người dùng nhạy cảm với chuyển động.
  - Hoạt động độc lập hoàn toàn (Zero bulky dependencies / 100% Standalone).

---

## 💻 05. Hướng dẫn chạy thử nghiệm tại máy cục bộ (Local Setup)

Bạn có thể mở trực tiếp tệp `index.html` bằng bất kỳ trình duyệt hiện đại nào, hoặc sử dụng máy chủ tĩnh cục bộ:

### Cách 1: Sử dụng VS Code Live Server
1. Mở thư mục dự án trong **VS Code**.
2. Nhấp chuột phải vào `index.html` và chọn **Open with Live Server**.

### Cách 2: Sử dụng Python Static Server
```bash
python -m http.server 8000
# Truy cập http://localhost:8000 trên trình duyệt
```

---

## 🌐 06. Xuất bản lên GitHub Pages (Deployment)

Vì kho lưu trữ này mang tên `chauda2006.github.io`, khi được đẩy (push) lên nhánh `main`, website sẽ tự động được xuất bản trực tiếp tại địa chỉ:

👉 **[https://chauda2006.github.io](https://chauda2006.github.io)**

---

## ⚖️ 07. Bản quyền & Giấy phép (License)

Dự án được phân phối dưới giấy phép **MIT License**. Bản quyền © 2026 thuộc về **Châu Tiến Đạt**.
