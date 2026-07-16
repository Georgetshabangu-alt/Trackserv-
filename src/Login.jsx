import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({ email, password, remember });
      alert("Login Successful!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <h1>TrackServe</h1>
          <p>Municipality Service Reporting System</p>
        </div>

        <div className="header-block">
          <h2>Secure access for your municipality team</h2>
          <p className="subtitle">
            Sign in to manage reports, update service requests, and view insights.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <div className="password-box">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="options">
            <label>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <a className="forgot-link" href="#">
              Forgot password?
            </a>
          </div>

          <button className="login-btn" type="submit">
            Sign in
          </button>
        </form>

        <p className="register-text">
          New to TrackServe?
          <Link to="/register">Create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;