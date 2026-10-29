import { Link as PortalLink } from "react-router-dom";
import { useState } from "react";
import PartnerPolicy from "./PartnerPolicy.jsx";
import "./PartnerPolicy.css";

import { Link } from "react-router-dom";

import {

  ArrowRight,

  Store,

  Hotel,

  Utensils,

  MapPin,

  Users,

  TrendingUp,

  ShieldCheck,

  FileText,

  Handshake,

  CheckCircle,

} from "lucide-react";

import "./Partner.css";



const partnerTypes = [

  {

    icon: Utensils,

    title: "Nhà hàng và quán cà phê",

    image: "/images/partner-restaurant.png",

    description:

      "Tiếp cận khách du lịch đang tìm kiếm địa điểm ăn uống và trải nghiệm ẩm thực.",

  },

  {

    icon: Hotel,

    title: "Khách sạn và lưu trú",

    image: "/images/partner-hotel.png",

    description:

      "Giới thiệu dịch vụ lưu trú đến những người đang lên kế hoạch cho chuyến đi.",

  },

  {

    icon: MapPin,

    title: "Điểm tham quan du lịch",

    image: "/images/partner-attraction.png",

    description:

      "Quảng bá địa điểm, hoạt động tham quan và trải nghiệm địa phương.",

  },

  {

    icon: Store,

    title: "Dịch vụ du lịch khác",

    image: "/images/partner-services.png",

    description:

      "Kết nối với khách hàng có nhu cầu sử dụng dịch vụ trong hành trình.",

  },

];



const benefits = [

  "Tăng khả năng tiếp cận khách du lịch trên nền tảng DISA.",

  "Giới thiệu thương hiệu, hình ảnh và thông tin dịch vụ.",

  "Có cơ hội nhận thêm đơn hàng từ khách hàng phù hợp.",

  "Theo dõi và đối soát đơn hàng theo quy trình thống nhất.",

];



const requirements = [

  "Thông tin đăng ký kinh doanh hoặc giấy tờ pháp lý phù hợp.",

  "Mã số thuế (MST), nếu thuộc trường hợp phải có.",

  "Giấy tờ của người đại diện hoặc người được ủy quyền.",

  "Giấy chứng nhận an toàn thực phẩm nếu ngành nghề thuộc diện yêu cầu.",

];



function Partner() {

  return (

    <div className="partner-page">

      <header className="partner-nav">

        <div className="partner-container partner-nav-inner">

          <Link to="/" className="partner-brand">

            <img src="/images/logo.png" alt="DISA Travel" />

            <span>PARTNER</span>

          </Link>



          <nav className="partner-nav-links">

            <a href="#partner-benefits">Lợi ích</a>

            <a href="#partner-process">Hợp tác</a>

            <a href="#partner-requirements">Điều kiện</a>

          </nav>



          <a className="partner-nav-cta" href="#partner-register">

            Đăng ký đối tác <ArrowRight size={17} />

          </a>

        </div>

      </header>



      <main>

        <section className="partner-hero">

          <div className="partner-container partner-hero-grid">

            <div className="partner-hero-copy">

              <span className="partner-eyebrow">

                DISA BUSINESS PARTNER

              </span>



              <h1>

                Cùng DISA

                <br />

                <span>kết nối du khách</span>

                <br />

                với trải nghiệm của bạn.

              </h1>



              <p>

                Đưa thương hiệu và dịch vụ của bạn đến gần hơn với khách du lịch.
                  Cùng xây dựng hệ sinh thái du lịch thuận tiện và nhiều trải nghiệm hơn.

              </p>



              <div className="partner-hero-actions">

                <a className="partner-btn partner-btn-blue" href="#partner-register">

                  Đăng ký hợp tác <ArrowRight size={18} />

                </a>



                <a className="partner-btn partner-btn-white" href="#partner-benefits">

                  Tìm hiểu lợi ích

                </a>

              </div>



              <div className="partner-trust-line">

                <ShieldCheck size={19} />

                Hồ sơ được xem xét trước khi hợp tác

              </div>

            </div>



            <div className="partner-hero-art">
              <div className="partner-art-glow" aria-hidden="true" />
              <div className="partner-screen-gallery" aria-label="Hình ảnh ứng dụng DISA Travel">
                <img
                  className="partner-screen partner-screen-left"
                  src="/images/disa-screen-05.jpg"
                  alt="Lịch trình du lịch và các địa điểm hợp tác trên DISA Travel"
                  loading="lazy"
                />
                <img
                  className="partner-screen partner-screen-main"
                  src="/images/disa-screen-03.jpg"
                  alt="Trang chủ ứng dụng DISA Travel"
                  loading="lazy"
                />
                <img
                  className="partner-screen partner-screen-right"
                  src="/images/disa-screen-11.jpg"
                  alt="Voucher và ưu đãi trên DISA Travel"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

        </section>



        <section className="partner-types-section">

          <div className="partner-container">

            <div className="partner-section-heading">

              <span className="partner-kicker">AI CÓ THỂ THAM GIA?</span>

              <h2>Đối tác trong hệ sinh thái du lịch</h2>

              <p>

                Nếu doanh nghiệp của bạn mang đến sản phẩm hoặc

                trải nghiệm cho khách du lịch, DISA chào đón cơ hội

                tìm hiểu và hợp tác phù hợp.

              </p>

            </div>



            <div className="partner-type-grid">

              {partnerTypes.map((item) => {

                const Icon = item.icon;



                return (

                  <article className="partner-type-card" key={item.title}>

                    <img className="partner-type-image" src={item.image} alt={item.title} loading="lazy" />

                    <div className="partner-icon-box">

                      <Icon size={27} />

                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                  </article>

                );

              })}

            </div>

          </div>

        </section>



        <section

          className="partner-benefits-section"

          id="partner-benefits"

        >

          <div className="partner-container partner-benefit-layout">

            <div>

              <span className="partner-kicker">LỢI ÍCH HỢP TÁC</span>

              <h2>Thương hiệu của bạn, thêm cơ hội được khám phá.</h2>

              <p>

                DISA hướng đến việc kết nối hành trình của du khách

                với những dịch vụ và địa điểm hữu ích. Thông tin đối tác

                có thể được giới thiệu trong ứng dụng theo hình thức

                và thỏa thuận được hai bên thống nhất.

              </p>

            </div>



<div className="partner-benefit-panel">
  <img
    className="partner-benefit-image"
    src="/images/partner-benefits.png"
    alt="Hợp tác kinh doanh cùng DISA"
  />

  {benefits.map((benefit) => (
    <div className="partner-benefit-highlight" key={benefit}>
      <CheckCircle size={21} />
      <span>{benefit}</span>
    </div>
  ))}
</div>

          </div>

        </section>



        <section className="partner-display-section">

          <div className="partner-container partner-display-grid">

            <div className="partner-display-points">

              <span className="partner-kicker">HIỆN DIỆN TRÊN DISA</span>

              <h2>Để du khách dễ dàng tìm hiểu dịch vụ của bạn</h2>

              <p>

                Hồ sơ đối tác có thể giới thiệu tên thương hiệu,

                hình ảnh, địa chỉ, mô tả dịch vụ và thông tin liên hệ.

                Vị trí hiển thị thực tế phụ thuộc vào chức năng ứng dụng

                và thỏa thuận triển khai.

              </p>



              <ul>

                <li>Thông tin thương hiệu rõ ràng.</li>

                <li>Hình ảnh và mô tả dịch vụ.</li>

                <li>Địa chỉ và hướng dẫn tìm đến địa điểm.</li>

                <li>Thông tin ưu đãi hoặc đặt dịch vụ khi được hỗ trợ.</li>

              </ul>

            </div>



            <div className="partner-preview-wrap">

              <div className="partner-preview-phone">

                <div className="partner-preview-status">9:41</div>

                <h3>Khám phá địa điểm</h3>

                <div className="partner-preview-search">

                  Tìm nhà hàng, khách sạn...

                </div>

                <div className="partner-preview-cover">

                  <MapPin size={28} />

                </div>

                <span className="partner-preview-subtitle">

                  GỢI Ý DÀNH CHO BẠN

                </span>

                <div className="partner-preview-business">

                  <div className="partner-preview-photo">

                    <Store size={24} />

                  </div>

                  <div>

                    <strong>Đối tác mẫu</strong>

                    <p>Ẩm thực · Trải nghiệm · Du lịch</p>

                  </div>

                </div>

                <div className="partner-preview-tabs">

                  <span>Khám phá</span>

                  <span>Lịch trình</span>

                  <span>Cá nhân</span>

                </div>

              </div>

              <p className="partner-preview-caption">

                Mockup minh họa — giao diện và vị trí hiển thị chính thức

                sẽ theo phiên bản DISA được triển khai.

              </p>

            </div>

          </div>

        </section>



        <section className="partner-commission-section" id="partner-process">

          <div className="partner-container">

            <div className="partner-section-heading">

              <span className="partner-kicker">QUY TRÌNH HỢP TÁC</span>

              <h2>Minh bạch từ đăng ký đến đối soát</h2>

              <p>

                Điều khoản thương mại và cơ chế ghi nhận khách hàng

                được trao đổi trước khi hai bên chính thức hợp tác.

              </p>

            </div>



            <div className="partner-commission-grid">

              <article className="partner-commission-card">

                <div className="partner-commission-step">01</div>

                <Users size={27} />

                <h3>Gửi hồ sơ</h3>

                <p>

                  Cung cấp thông tin doanh nghiệp và người đại diện

                  để DISA tiếp nhận.

                </p>

              </article>



              <article className="partner-commission-card">

                <div className="partner-commission-step">02</div>

                <ShieldCheck size={27} />

                <h3>Xác minh và trao đổi</h3>

                <p>

                  Hai bên kiểm tra hồ sơ, phạm vi dịch vụ và thống nhất

                  điều kiện hợp tác.

                </p>

              </article>



              <article className="partner-commission-card partner-commission-card-wide">

                <div className="partner-commission-step">03</div>

                <Handshake size={27} />

                <h3>Triển khai và đối soát</h3>

                <p>

                  Thống nhất cách ghi nhận đơn hàng thành công,

                  tỷ lệ hoa hồng và chu kỳ thanh toán.

                </p>

              </article>

            </div>



            <div className="partner-commission-formula">

              <TrendingUp size={25} />

              <div>

                <strong>Cơ chế hoa hồng theo thỏa thuận</strong>

                <p>

                  Nếu áp dụng hoa hồng, tỷ lệ và căn cứ tính sẽ được

                  hai bên thống nhất bằng văn bản. Có thể tính trên

                  giá trị đơn hàng đủ điều kiện được ghi nhận từ DISA,

                  theo các điều khoản cụ thể của hợp đồng.

                </p>

              </div>

            </div>

          </div>

        </section>



        <section

          className="partner-requirements-section"

          id="partner-requirements"

        >

          <div className="partner-container">

            <div className="partner-section-heading">

              <span className="partner-kicker">HỒ SƠ ĐỐI TÁC</span>

              <h2>Chuẩn bị thông tin cần thiết</h2>

              <p>

                Danh sách dưới đây mang tính tham khảo. Hồ sơ cụ thể

                tùy thuộc vào loại hình doanh nghiệp và ngành nghề kinh doanh.

              </p>

            </div>



            <div className="partner-requirements-grid">

              <div className="partner-requirements-card">

                <FileText size={29} />

                <h3>Giấy tờ xác minh</h3>

                <ul>

                  {requirements.map((requirement) => (

                    <li key={requirement}>{requirement}</li>

                  ))}

                </ul>

              </div>



              <div className="partner-requirements-card">

                <ShieldCheck size={29} />

                <h3>Quy trình bảo vệ thông tin</h3>

                <p>

                  Chỉ gửi bản sao giấy tờ khi đã xác nhận kênh tiếp nhận

                  chính thức của DISA. Không tải giấy tờ nhạy cảm lên

                  biểu mẫu demo trên trang này.

                </p>

                <div className="partner-verify-note">

                  <CheckCircle size={18} />

                  Hồ sơ chính thức cần được tiếp nhận qua kênh bảo mật.

                </div>

              </div>

            </div>



            <p className="partner-legal-note">

              Việc đăng ký không đồng nghĩa với việc được chấp thuận

              hợp tác. Các yêu cầu pháp lý cần được xác minh theo quy định

              áp dụng cho từng ngành nghề và địa phương.

            </p>

          </div>

        </section>



        <section className="partner-register-section" id="partner-register">

          <div className="partner-container">

            <div className="partner-register-heading">

              <span className="partner-kicker">BẮT ĐẦU KẾT NỐI</span>

              <h2>Đăng ký quan tâm hợp tác cùng DISA</h2>

              <p>

                Để lại thông tin liên hệ cơ bản. Đội ngũ phụ trách có thể

                liên hệ trao đổi thêm về nhu cầu và điều kiện hợp tác.

              </p>

            </div>



            <PartnerContactForm />

          </div>

        </section>



        <section className="partner-faq-section">

          <div className="partner-container">

            <div className="partner-section-heading">

              <span className="partner-kicker">CÂU HỎI THƯỜNG GẶP</span>

              <h2>Thông tin trước khi đăng ký</h2>

            </div>



            <div className="partner-faq-list">

              <details>

                <summary>Đăng ký có đồng nghĩa được hợp tác ngay không?</summary>

                <p>

                  Không. DISA cần xem xét thông tin, hồ sơ và điều kiện

                  hợp tác trước khi xác nhận.

                </p>

              </details>

              <details>

                <summary>Hoa hồng được tính như thế nào?</summary>

                <p>

                  Nếu có áp dụng, tỷ lệ, cách ghi nhận đơn hàng thành công,

                  kỳ đối soát và thanh toán sẽ được hai bên thỏa thuận

                  trước khi triển khai.

                </p>

              </details>

              <details>

                <summary>Tôi có cần gửi giấy tờ ngay trên trang này không?</summary>

                <p>

                  Không. Biểu mẫu hiện tại chỉ là bản demo tiếp nhận

                  thông tin liên hệ, không thu thập giấy tờ xác minh.

                </p>

              </details>

            </div>

          </div>

        </section>

      </main>



      <footer className="partner-footer">

        <div className="partner-container partner-footer-inner">

          <div>

            <strong>DISA PARTNER</strong>

            <p>Kết nối doanh nghiệp với trải nghiệm du lịch.</p>

          </div>

          <Link to="/">Quay lại trang chủ DISA</Link>

        </div>

        <div className="partner-footer-bottom">

          © {new Date().getFullYear()} DISA. All rights reserved.

        </div>

      </footer>

    </div>

  );

}

function PartnerContactForm() {
  // Form giới thiệu hiện tại được giữ nguyên; đăng ký tài khoản thực hiện ở trang riêng.
  const [step, setStep] = useState("register");
  const [partnerData, setPartnerData] = useState(null);

  const [form, setForm] = useState({

    businessName: "",

    businessType: "Nhà hàng / Quán cà phê",

    contactName: "",

    phone: "",

    email: "",

    location: "",

    message: "",

    consent: false,

  });



  const updateField = (event) => {

    const { name, value, type, checked } = event.target;

    setForm((previous) => ({

      ...previous,

      [name]: type === "checkbox" ? checked : value,

    }));

  };



  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.consent) return;
    setPartnerData({ ...form });
    setStep("policy");
  };



  if (step === "policy") {
    return (
      <PartnerPolicy
        partnerData={partnerData}
        onBack={() => setStep("register")}
      />
    );
  }

  return (
    <div><p><PortalLink to="/partner/register">Đăng ký tài khoản đối tác để gửi yêu cầu lên hệ thống</PortalLink> · <PortalLink to="/login">Đăng nhập đối tác</PortalLink></p><form className="partner-form" onSubmit={handleSubmit}>

      <div className="partner-form-intro">

        <Store size={27} />

        <div>

          <h3>Thông tin doanh nghiệp</h3>

          <p>

            Vui lòng cung cấp thông tin liên hệ cơ bản. Không nhập số

            giấy tờ cá nhân hoặc thông tin tài chính vào biểu mẫu demo.

          </p>

        </div>

      </div>



      <div className="partner-form-grid">

        <label>

          Tên doanh nghiệp / cơ sở *

          <input

            name="businessName"

            value={form.businessName}

            onChange={updateField}

            required

            maxLength={150}

            placeholder="Ví dụ: Nhà hàng ABC"

          />

        </label>



        <label>

          Loại hình kinh doanh *

          <select

            name="businessType"

            value={form.businessType}

            onChange={updateField}

            required

          >

            <option>Nhà hàng / Quán cà phê</option>

            <option>Khách sạn / Lưu trú</option>

            <option>Điểm tham quan</option>

            <option>Dịch vụ du lịch</option>

            <option>Khác</option>

          </select>

        </label>



        <label>

          Người liên hệ *

          <input

            name="contactName"

            value={form.contactName}

            onChange={updateField}

            required

            maxLength={100}

            placeholder="Họ tên người liên hệ"

          />

        </label>



        <label>

          Số điện thoại *

          <input

            name="phone"

            type="tel"

            value={form.phone}

            onChange={updateField}

            required

            maxLength={25}

            placeholder="Số điện thoại liên hệ"

          />

        </label>



        <label>

          Email

          <input

            name="email"

            type="email"

            value={form.email}

            onChange={updateField}

            maxLength={150}

            placeholder="business@example.com"

          />

        </label>



        <label>

          Tỉnh / thành phố *

          <input

            name="location"

            value={form.location}

            onChange={updateField}

            required

            maxLength={100}

            placeholder="Ví dụ: Đà Nẵng"

          />

        </label>



        <label className="partner-form-full">

          Nhu cầu hợp tác

          <textarea

            name="message"

            value={form.message}

            onChange={updateField}

            maxLength={1000}

            rows={4}

            placeholder="Giới thiệu ngắn về dịch vụ và mong muốn hợp tác..."

          />

        </label>

      </div>



      <label className="partner-consent">

        <input

          type="checkbox"

          name="consent"

          checked={form.consent}

          onChange={updateField}

          required

        />

        <span>

          Tôi đồng ý để DISA sử dụng thông tin liên hệ trên nhằm trao đổi

          về nhu cầu hợp tác. *

        </span>

      </label>



      <button type="submit" className="partner-btn partner-btn-blue partner-submit">

        Tiếp tục xem chính sách hợp tác <ArrowRight size={18} />

      </button>



      <p className="partner-form-disclaimer">

        Bản demo này không gửi hoặc lưu thông tin. Khi triển khai thực tế,

        cần bổ sung API, thông báo quyền riêng tư và cơ chế bảo vệ dữ liệu.

      </p>

    </form></div>

  );

}



export default Partner;