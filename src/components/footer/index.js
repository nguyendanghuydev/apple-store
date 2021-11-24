import Logo from "../../assets/images/logo.png";
import Grid from "../grid";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Grid lg={3} md={2} sm={1} gap={30}>
          <ul className="footer__shop">
            <li>Địa Chỉ</li>
            <li>Thanh Oai,Hà Nội</li>
            <li>Chương Mỹ,Hà Nội</li>
            <li>Thanh Xuân,Hà Đông</li>
            <li>Cầu Giấy,Hà Nội</li>
          </ul>
          <ul className="footer__contact">
            <li>Số điện thoại liên hệ</li>
            <li>
              Gọi mua hàng : <strong>0123456789</strong>
            </li>
            <li>
              Gọi khiếu lại : <strong>0123456789</strong>
            </li>
            <li>
              Gọi bảo hành : <strong>0123456789</strong>
            </li>
          </ul>
          <div className="footer__logo">
            <img src={Logo} alt="logo" />
          </div>
        </Grid>
      </div>
    </footer>
  );
}

export default Footer;
