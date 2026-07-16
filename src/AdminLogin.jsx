import { useState } from "react";
import "./AdminLogin.css";

const initialAdminState = {
  identifier: "",
  password: "",
};

const initialAdminErrors = {
  identifier: "",
  password: "",
};

function AdminLogin() {
  const [form, setForm] = useState(initialAdminState);
  const [errors, setErrors] = useState(initialAdminErrors);
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (!form.identifier.trim()) {
      nextErrors.identifier = "Admin username or email is required.";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setSubmitting(false);

    alert("Admin login successful. Welcome to the secure dashboard.");
    setForm(initialAdminState);
  };

  return (
    <div className="admin-auth-page">
      <div className="admin-auth-card" role="main" aria-labelledby="admin-login-title">
        <div className="admin-lozenge">
          <span className="admin-lozenge-dot" aria-hidden="true" />
          <span className="admin-lozenge-text">Administrator Portal</span>
        </div>

        <h1 id="admin-login-title" className="admin-auth-title">
          Secure Admin Login
        </h1>
        <p className="admin-auth-copy">
          Sign in with your municipal administrator credentials to manage service reports, approvals,
          and internal dashboards.
        </p>

        <form className="admin-auth-form" onSubmit={handleSubmit} noValidate>
          <div className="admin-field-group">
            <label htmlFor="identifier">Admin username or email</label>
            <input
              id="identifier"
              name="identifier"
              type="text"
              placeholder="admin@example.gov"
              value={form.identifier}
              onChange={handleChange}
              aria-invalid={Boolean(errors.identifier)}
              aria-describedby={errors.identifier ? "identifier-error" : undefined}
              autoComplete="username"
            />
            {errors.identifier && (
              <span className="field-error" id="identifier-error">
                {errors.identifier}
              </span>
            )}
          </div>

          <div className="admin-field-group">
            <label htmlFor="admin-password">Password</label>
            <div className="admin-password-row">
              <input
                id="admin-password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your secure password"
                value={form.password}
                onChange={handleChange}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={errors.password ? "password-error" : undefined}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="admin-password-toggle"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <span className="field-error" id="password-error">
                {errors.password}
              </span>
            )}
          </div>

          <div className="admin-actions">
            <div />
            <a className="admin-forgot" href="#">
              Forgot password?
            </a>
          </div>

          <button className="admin-auth-button" type="submit" disabled={submitting}>
            {submitting ? "Signing in..." : "Login"}
          </button>
        </form>

        <div className="admin-notice">
          Only authorized municipal administrators may use this portal. User registration is not available here.
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
