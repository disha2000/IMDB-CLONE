import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-section">
      <Link to="login">
        <button className="sign-in-button">Sign in for more access</button>
      </Link>
      <p className="copyright-text">© 1990-2025 by IMDb.com, Inc.</p>
    </div>
  );
};
export default Footer;
