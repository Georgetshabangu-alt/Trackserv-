import { Link } from "react-router-dom";
import "./styles.css";

function Register() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <h1>TrackServe</h1>
          <p>Municipality Service Reporting System</p>
        </div>

        <div className="header-block">
          <h2>Create a secure municipality account</h2>
          <p className="subtitle">
            Join your local team to manage issue reports, service requests, and updates.
          </p>
        </div>

        <form className="auth-form">
          <div className="input-group">
            <label htmlFor="fullName">Full name</label>
            <input id="fullName" type="text" placeholder="Enter your full name" />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="name@company.com" />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Create a password" />
          </div>

          <button className="login-btn" type="submit">
            Register account
          </button>
        </form>

        <p className="register-text">
          Already have an account?
          <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
