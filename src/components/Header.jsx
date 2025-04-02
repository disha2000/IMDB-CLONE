import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="header-section">
      <img src="/IMDB_Logo_2016.svg.png" alt="imdb icon" className="logo" />
      <div className="nav-items">
        <Link to="/login">
          <p>Sign In</p>
        </Link>
        <Link to="/register">
          <p>Sign Up</p>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
