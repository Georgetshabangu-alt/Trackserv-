import { useState } from 'react';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LogoMark = () => (
  <div className="brand-mark" aria-hidden="true">
    <svg viewBox="0 0 64 64" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="16" width="48" height="32" rx="10" fill="#5f7bff" />
      <path d="M20 24h24" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M20 32h24" stroke="#b4c3ff" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 40h8" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M42 12l12 8-12 8V12z" fill="#ffb74d" />
      <path d="M47 18h-2v6h2V18z" fill="#5b3f00" />
      <path d="M45 30h4v4h-4z" fill="#5b3f00" />
    </svg>
  </div>
);

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setError('');
    console.log('Login submitted', { email, rememberMe });
    alert('Success! Form submitted.');
  };

  return (
    <main className="page-shell">
      <section className="login-card">
        <div className="brand-panel">
          <LogoMark />
          <div>
            <p className="brand-title">Trackserv</p>
            <p className="brand-subtitle">Pothole & municipal issue reporting</p>
          </div>
        </div>

        <div className="card-heading">
          <h1>Welcome back</h1>
          <p>Sign in to continue to your dashboard and report service issues quickly.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <label className="field-label">
            Email address
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              required
            />
          </label>

          <label className="field-label">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              aria-label="Password"
              required
            />
          </label>

          {error && <p className="error-message">{error}</p>}

          <div className="form-footer">
            <label className="remember-label">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Remember me
            </label>
            <a href="#" className="forgot-link">Forgot password?</a>
          </div>

          <button type="submit" className="submit-button">Sign In</button>
        </form>
      </section>
    </main>
  );
}

export default App;
