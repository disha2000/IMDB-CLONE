import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register-section">
      <div className="register-form">
        <h1>Create account</h1>
        <form>
          <div>
            <label>Your name</label>
            <input />
          </div>
          <div>
            <label>Email</label>
            <input />
          </div>

          <div>
            <label>Password</label>
            <input />
            <p className="hint">Passwords must be at least 8 characters.</p>
          </div>
          <button className="sign-in-button">Create your IMDb account</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;
