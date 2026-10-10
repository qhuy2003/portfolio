export const projectsData = [
  {
    id: "cinestream",
    title: "CineStream — Movie Streaming Platform",
    shortDesc: "Nền tảng khám phá và xem phim trực tuyến với tìm kiếm, bộ lọc phim, danh sách yêu thích và trang quản trị.",
    longDesc: "Ứng dụng full-stack cho phép người dùng khám phá phim theo thể loại, quốc gia, năm phát hành và loại phim; xem thông tin chi tiết, phát video và lưu phim yêu thích. Tích hợp đăng nhập JWT, phân quyền quản trị, quản lý phim và thể loại, cùng khả năng đồng bộ dữ liệu từ API vào PostgreSQL.",
    image: "/assets/cinestream.jpg",
    category: "Full-stack",
    tags: ["Vue 3", "Go", "Gin", "PostgreSQL", "GORM", "JWT", "REST API"],
    githubUrl: "https://github.com/qhuy2003/movie-web",
    demoUrl: "https://movie-web-smoky-rho.vercel.app",
    featured: true,

  },
  {
    id: "task",
    title: "Task Management App",
    shortDesc: "Hệ thống quản lý,nhắn tin và giao việc thời gian thực dành cho doanh nghiệp, chủ cơ sở và nhân viên.",
    longDesc: "Dự án Dashboard dành cho quản lý team phần mềm. Giúp theo dõi commits, pull requests, số lượng bugs và thời gian hoàn thành công việc thông qua biểu đồ tương tác mượt mà.",
    image:"/assets/task.jpg",
    category: "React",
    tags: ["React.js", "Framer Motion", "Socket.io", "CSS Modules"],
    githubUrl: "https://github.com/qhuy2003/task-management-app",
    featured: true
  },
  {
    id: "b2b-ecommerce",
    title: "B2B - E-Commerce Web ",
    shortDesc: "Trang web thương mại điện tử công nghệ với giỏ hàng, lọc sản phẩm thông minh và thanh toán online.",
    longDesc: "Web ứng dụng mua sắm thiết bị công nghệ hiện đại. Hỗ trợ lọc theo thương hiệu, mức giá, tìm kiếm thông minh, quản lý giỏ hàng với Redux Toolkit và lưu trữ vào LocalStorage.",
    image: "/assets/b2b.jpg",
    category: "Fullstack",
    tags: ["React.js", "TrackAsia", "Laravel", "Tailwind CSS"],
    githubUrl: "https://github.com/qhuy2003/LuanVan",
    demoUrl: "https://luanvan111.vercel.app/",
    featured: true
  },
  {
    id: "quiz-web",
    title: "QuizWebsite",
    shortDesc: "Nền tảng ôn luyện và làm bài kiểm tra trắc nghiệm trực tuyến dành cho học sinh từ lớp 1 đến lớp 12.",    longDesc: "Nền tảng lưu trữ, đánh giá và chia sẻ các Prompt chất lượng cao cho ChatGPT & Midjourney. Tích hợp chức năng sao chép 1-click, lọc theo danh mục và vote cộng đồng.",
    image: "/assets/quizweb.jpg",
    category: "UI/UX",
    tags: ["React.js", "Node.js", "LocalStorage", "RESTful API", "Tailwind CSS"],
    githubUrl: "https://github.com/QuangHuy193/web_thi_trac_nghiem",
    demoUrl: null, // Trạng thái chưa triển khai demo để kiểm tra UX disabled state + tooltip
    featured: true
  },
  {
    id: "bookstore-laravel",
    title: "Bookstore - Laravel",
    shortDesc: "Cửa hàng sách trực tuyến được xây dựng bằng Laravel với chức năng quản lý sản phẩm, giỏ hàng và thanh toán.",
    image: "/assets/bookstore.jpg",
    category: "Fullstack",
    tags: ["Laravel", "MySQL", "Bootstrap", "JavaScript"],
    githubUrl: "https://github.com/qhuy2003/LuanVan",
    featured: false
  }
];
