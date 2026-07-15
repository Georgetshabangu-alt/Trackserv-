import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Admin email is required";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log({ email, password });
      alert("Admin login successful");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo">
          <h1>TrackServe Admin</h1>
          <p>Administrator access for service management</p>
        </div>

        <div className="header-block">
          <h2>Admin portal sign in</h2>
          <p className="subtitle">
            Use your administrator credentials to access the dashboard and management tools.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleAdminLogin}>
          <div className="input-group">
            <label htmlFor="admin-email">Admin email</label>
            <input
              id="admin-email"
              type="email"
              placeholder="admin@trackserve.local"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="admin-password">Password</label>
            <div className="password-box">
              <input
                id="admin-password"
                type={showPassword ? "text" : "password"}
                placeholder="Admin password"
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

          <button className="login-btn" type="submit">
            Sign in as Admin
          </button>
        </form>

        <p className="register-text">
          Back to user login?
          <Link to="/login">User login</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminLogin;
