import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login-section">
      <div className="register-section">
        <div className="register-form">
          <h1>Sign In To Account</h1>
          <form>
            <div>
              <label>Email</label>
              <input />
            </div>

            <div>
              <label>Password</label>
              <input />
            </div>
            <button className="sign-in-button">
              Sign In your IMDb account
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
