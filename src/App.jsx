import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Plane,
  Map,
  Camera,
  Gift,
  History,
  Download,
  Menu,
  X,
  ArrowRight,
  Smartphone,
  CheckCircle,
  Compass,
  MapPin,
  PlayCircle,
  Star
} from "lucide-react";
import "./App.css";

const features = [
  {
    icon: Map,
    title: "Tạo lịch trình",
    description:
      "Lên kế hoạch và quản lý lịch trình du lịch theo sở thích của bạn."
  },
  {
    icon: Camera,
    title: "Nhiệm vụ du lịch",
    description:
      "Thực hiện các nhiệm vụ chụp ảnh và quay video trong chuyến đi."
  },
  {
    icon: Gift,
    title: "Tích lũy điểm thưởng",
    description:
      "Hoàn thành nhiệm vụ để nhận điểm và theo dõi điểm tích lũy."
  },
  {
    icon: History,
    title: "Lịch sử nhiệm vụ",
    description:
      "Theo dõi những nhiệm vụ và hoạt động bạn đã thực hiện."
  }
];

const screenshots = [
  { title: 'Màn hình khởi động', image: "/images/disa-screen-00.jpg", description: 'Nhận diện ứng dụng DISA Travel.' },
  { title: 'Đăng nhập', image: "/images/disa-screen-01.jpg", description: 'Truy cập tài khoản DISA.' },
  { title: 'Đăng ký tài khoản', image: "/images/disa-screen-02.jpg", description: 'Bắt đầu hành trình cùng DISA.' },
  { title: 'Trang chủ DISA', image: "/images/disa-screen-03.jpg", description: 'Khám phá hành trình, nhiệm vụ và ưu đãi.' },
  { title: 'Tạo lịch trình', image: "/images/disa-screen-04.jpg", description: 'Lựa chọn điểm đến, ngày đi và ngân sách.' },
  { title: 'Lịch trình cá nhân', image: "/images/disa-screen-05.jpg", description: 'Xem lịch trình với địa điểm và dịch vụ.' },
  { title: 'Chi tiết hành trình', image: "/images/disa-screen-06.jpg", description: 'Theo dõi các hoạt động trong chuyến đi.' },
  { title: 'Lịch trình của tôi', image: "/images/disa-screen-07.jpg", description: 'Quản lý những chuyến đi đã tạo.' },
  { title: 'AI Guide', image: "/images/disa-screen-08.jpg", description: 'Khám phá tính năng dịch thuật.' },
  { title: 'Nhiệm vụ đang thực hiện', image: "/images/disa-screen-09.jpg", description: 'Chụp ảnh và quay video để nhận thưởng.' },
  { title: 'Nhiệm vụ đã hoàn thành', image: "/images/disa-screen-10.jpg", description: 'Theo dõi thành quả và điểm nhận được.' },
  { title: 'Voucher', image: "/images/disa-screen-11.jpg", description: 'Khám phá các ưu đãi du lịch.' },
  { title: 'Tài khoản cá nhân', image: "/images/disa-screen-12.jpg", description: 'Xem thông tin và điểm tích lũy.' },
  { title: 'Cài đặt ứng dụng', image: "/images/disa-screen-13.jpg", description: 'Điều chỉnh thông tin và trải nghiệm.' },
  { title: 'Tùy chọn & bảo mật', image: "/images/disa-screen-14.jpg", description: 'Quản lý quyền riêng tư và ứng dụng.' }
];

const guides = [
  {
    title: "Tải và cài đặt",
    description:
      "Tải file APK về điện thoại Android và cài đặt ứng dụng."
  },
  {
    title: "Tạo lịch trình",
    description:
      "Mở DISA, chọn Create Itinerary và tạo kế hoạch du lịch."
  },
  {
    title: "Thực hiện nhiệm vụ",
    description:
      "Chọn nhiệm vụ phù hợp, chụp ảnh hoặc quay video theo yêu cầu."
  },
  {
    title: "Nhận điểm và xem lịch sử",
    description:
      "Theo dõi điểm thưởng và xem lại các nhiệm vụ trong Mission History."
  }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
  <img src="/images/logo.png" alt="DISA Travel" />
</a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Trang chủ</a>
          <a href="#features" onClick={closeMenu}>Tính năng</a>
          <a href="#screenshots" onClick={closeMenu}>Giao diện</a>
<a href="#guide" onClick={closeMenu}>Hướng dẫn</a>

<Link to="/login" onClick={closeMenu}>Đăng nhập</Link>
<Link to="/partner" onClick={closeMenu}>
  Đối tác doanh nghiệp
</Link>

<a
  href="#download"
  className="nav-download"
  onClick={closeMenu}
>
  Tải ứng dụng
</a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Mở hoặc đóng menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Plane size={16} />
            YOUR SMART TRAVEL COMPANION
          </div>

          <h1>
            Khám phá thế giới
            <br />
            cùng <span>DISA</span>
          </h1>

          <p>
            Biến mỗi chuyến đi thành một hành trình đáng nhớ.
            Tự tạo lịch trình, khám phá những địa điểm mới,
            thực hiện nhiệm vụ chụp ảnh, quay video và tích
            lũy điểm thưởng.
          </p>

          <div className="hero-buttons">
            <a href="#download" className="btn btn-gold">
              <Download size={20} />
              Tải ứng dụng
            </a>

            <a href="#features" className="btn btn-outline">
              Khám phá DISA
              <ArrowRight size={19} />
            </a>
          </div>

          <div className="hero-highlights">
            <span><CheckCircle size={18} /> Tạo lịch trình</span>
            <span><CheckCircle size={18} /> Nhiệm vụ du lịch</span>
            <span><CheckCircle size={18} /> Tích điểm</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <div className="phone-frame">
            <img
              src="/images/disa-screen-03.jpg"
              alt="Giao diện trang chủ DISA"
            />
          </div>

          <div className="floating-card floating-card-top">
            <MapPin size={20} />
            <div>
              <strong>Explore</strong>
              <small>Khám phá điểm đến</small>
            </div>
          </div>

          <div className="floating-card floating-card-bottom">
            <Star size={21} />
            <div>
              <strong>Earn Points</strong>
              <small>Hoàn thành nhiệm vụ</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">OUR FEATURES</span>
          <h2>Một ứng dụng, nhiều trải nghiệm</h2>
          <p>
            DISA kết hợp việc lên kế hoạch du lịch với các
            nhiệm vụ thú vị trong suốt hành trình.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon size={30} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <div className="feature-bottom">
                  <ArrowRight size={21} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Screenshots() {
  return (
    <section className="section screenshots-section" id="screenshots">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">APP PREVIEW</span>
          <h2>Khám phá giao diện DISA</h2>
          <p>
            Xem trước các màn hình và tính năng nổi bật
            của ứng dụng du lịch DISA.
          </p>
        </div>

        <div className="screenshots-grid">
          {screenshots.map((screen) => (
            <div className="screenshot-card" key={screen.title}>
              <div className="screenshot-image">
                <img
                  src={screen.image}
                  alt={screen.title}
                  loading="lazy"
                />
              </div>

              <h3>{screen.title}</h3>
              <p>{screen.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionBanner() {
  return (
    <section className="mission-banner">
      <div className="container mission-container">
        <div className="mission-content">
          <span className="section-label">TRAVEL MISSIONS</span>

          <h2>
            Khám phá, ghi lại khoảnh khắc
            và nhận điểm thưởng
          </h2>

          <p>
            Trong mỗi chuyến đi, hãy tham gia những nhiệm vụ
            thú vị bằng cách chụp ảnh hoặc quay video.
            Hoàn thành thử thách để tích lũy điểm thưởng.
          </p>

          <a href="#guide" className="btn btn-primary">
            Xem hướng dẫn
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="mission-visual">
          <div className="mission-visual-card">
            <Camera size={45} />
            <h3>Photo Mission</h3>
            <p>Chụp ảnh để hoàn thành nhiệm vụ</p>
          </div>

          <div className="mission-visual-card">
            <PlayCircle size={45} />
            <h3>Video Mission</h3>
            <p>Quay video ghi lại trải nghiệm</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function UserGuide() {
  return (
    <section className="section guide-section" id="guide">
      <div className="container">
        <div className="section-heading">
          <span className="section-label">HOW IT WORKS</span>
          <h2>Hướng dẫn sử dụng DISA</h2>
          <p>
            Chỉ với vài bước đơn giản, bạn đã có thể bắt đầu
            hành trình du lịch của riêng mình.
          </p>
        </div>

        <div className="guide-grid">
          {guides.map((guide, index) => (
            <div className="guide-card" key={guide.title}>
              <div className="step-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadBanner() {
  return (
    <section className="download-section" id="download">
      <div className="container download-container">
        <div className="download-icon">
          <Smartphone size={43} />
        </div>

        <span className="section-label">DOWNLOAD DISA</span>

        <h2>Sẵn sàng cho hành trình tiếp theo?</h2>

        <p>
          Tải DISA về điện thoại Android để khám phá những
          điểm đến mới, lên lịch trình, hoàn thành nhiệm vụ
          và tích lũy điểm thưởng.
        </p>

        <a
          href="https://disatravel.id.vn/downloads/DisaTravel.apk"
          className="btn btn-gold download-button"
          download="DisaTravel.apk"
        >
          <Download size={23} />
          Tải DISA APK
        </a>

        <div className="download-info">
          <span>
            <CheckCircle size={17} />
            Android
          </span>

          <span>
            <CheckCircle size={17} />
            Miễn phí
          </span>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div>
<div className="footer-logo">
  <img
    src="/images/logo.png"
    alt="DISA Travel"
    className="footer-logo-img"
  />
</div>

          <p>Explore more. Experience more.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Trang chủ</a>
          <a href="#features">Tính năng</a>
          <a href="#guide">Hướng dẫn</a>
          <a href="#download">Tải ứng dụng</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DISA. All rights reserved.
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Screenshots />
        <MissionBanner />
        <UserGuide />
        <DownloadBanner />
      </main>
      <Footer />
    </>
  );
}

export default App;