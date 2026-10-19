import { useState } from "react";
import {
  ArrowLeft, CheckCircle, Send, ShieldCheck,
  Handshake, BadgeCheck, Copy, QrCode,
} from "lucide-react";

const BANK = {
  name: "MB Bank",
  holder: "NGUYEN QUOC ANH",
  account: "79999179999",
  qr: "/images/disa-payment-qr.png",
};

export default function PartnerPolicy({ onBack, partnerData }) {
  const [agreed, setAgreed] = useState(false);
  const [step, setStep] = useState("policy");
  const [copied, setCopied] = useState(false);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(BANK.account);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  if (step === "qr") {
    return (
      <section className="partner-policy-section">
        <div className="partner-payment-container">
          <header className="partner-policy-heading">
            <span>DISA PARTNER</span>
            <h2>Thông tin QR chuyển khoản</h2>
            <p>Đây là màn hình tham khảo thông tin thanh toán, chưa xác nhận đơn hàng hay số tiền.</p>
          </header>

          <div className="partner-payment-card">
            <div className="partner-payment-status">Chưa có báo giá xác nhận</div>
            <h3><QrCode size={22} /> Mã QR MB Bank</h3>
            <div className="partner-payment-qr">
              <img src={BANK.qr} alt="QR VietQR MB Bank" />
            </div>

            <div className="partner-payment-bank">
              <div><span>Ngân hàng</span><strong>{BANK.name}</strong></div>
              <div><span>Chủ tài khoản</span><strong>{BANK.holder}</strong></div>
              <div className="partner-payment-account">
                <span>Số tài khoản</span>
                <strong>{BANK.account}</strong>
                <button type="button" onClick={copyAccount} aria-label="Sao chép số tài khoản">
                  <Copy size={16} /> {copied ? "Đã sao chép" : "Sao chép"}
                </button>
              </div>
              {partnerData?.businessName && (
                <div><span>Doanh nghiệp đăng ký</span><strong>{partnerData.businessName}</strong></div>
              )}
              <div><span>Số tiền</span><strong>Chờ báo giá chính thức</strong></div>
            </div>

            <p className="partner-payment-warning">
              Chỉ chuyển khoản sau khi DISA xác nhận báo giá, số tiền và tài khoản thụ hưởng chính thức.
              Trang này chưa kết nối ngân hàng hoặc hệ thống xác nhận thanh toán tự động.
            </p>
            <button type="button" className="partner-policy-back" onClick={() => setStep("policy")}>
              <ArrowLeft size={18} /> Quay lại chính sách
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="partner-policy-section">
      <div className="partner-policy-container">
        <header className="partner-policy-heading">
          <span>DISA PARTNER</span>
          <h2>Chính sách hợp tác doanh nghiệp</h2>
          <p>Vui lòng xem các điều khoản dự kiến trước khi tiếp tục đến thông tin QR.</p>
        </header>

        {partnerData?.businessName && (
          <div className="partner-policy-business">
            Doanh nghiệp đăng ký: <strong>{partnerData.businessName}</strong>
          </div>
        )}

        <div className="partner-policy-price">
          <span>CHI PHÍ HỢP TÁC</span>
          <h2>Liên hệ báo giá</h2>
          <p>Mức phí tùy theo loại hình doanh nghiệp, phạm vi hợp tác và dịch vụ triển khai thực tế.</p>
        </div>

        <div className="partner-policy-benefits">
          <article><BadgeCheck size={30} /><h3>Hiển thị thương hiệu</h3><p>Giới thiệu thông tin và dịch vụ doanh nghiệp trên DISA.</p></article>
          <article><Handshake size={30} /><h3>Hợp tác linh hoạt</h3><p>Thống nhất hình thức hợp tác, mức phí và tỷ lệ hoa hồng.</p></article>
          <article><ShieldCheck size={30} /><h3>Đối soát minh bạch</h3><p>Thỏa thuận ghi nhận đơn hàng và chu kỳ thanh toán.</p></article>
        </div>

        <div className="partner-policy-terms">
          <h3>Chính sách hợp tác dự kiến</h3>
          <ul>
            <li>Doanh nghiệp cung cấp thông tin đăng ký chính xác và hợp pháp.</li>
            <li>Chi phí hợp tác được trao đổi và thống nhất trước khi thanh toán.</li>
            <li>Hoa hồng phát sinh từ đơn hàng thành công được xác định theo thỏa thuận.</li>
            <li>DISA xem xét hồ sơ và hướng dẫn triển khai sau khi hai bên xác nhận hợp tác.</li>
          </ul>
          <label className="partner-policy-consent">
            <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} />
            <span>Tôi đã đọc và đồng ý với chính sách hợp tác dự kiến của DISA.</span>
          </label>
        </div>

        <div className="partner-policy-actions">
          <button type="button" className="partner-policy-back" onClick={onBack}>
            <ArrowLeft size={18} /> Quay lại đăng ký
          </button>
          <button type="button" className="partner-policy-btn" disabled={!agreed} onClick={() => setStep("qr")}>
            <Send size={18} /> Xem QR thanh toán
          </button>
        </div>
        <p className="partner-policy-note">Xem QR không có nghĩa là đã gửi yêu cầu báo giá hoặc phát sinh nghĩa vụ thanh toán.</p>
      </div>
    </section>
  );
}
