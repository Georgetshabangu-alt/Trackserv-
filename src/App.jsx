import { useState } from 'react';

function App() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setError('');
      alert('Login successful. Welcome back to TrackSev!');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-brand">
          <span className="brand-dot"></span>
          <span className="brand-name">TrackSev</span>
        </div>

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Sign in to track and manage civic reports.</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />
          </div>

          <div className="field-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={form.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
          </div>

          {error && <p className="auth-error">⚠ {error}</p>}

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : 'Sign In'}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <a href="#">Create one</a>
        </p>
      </div>

      <div className="auth-visual">
        <div className="visual-content">
          <h2>Every report makes a difference.</h2>
          <p>Join thousands of citizens building a better community through transparency and accountability.</p>
          <div className="visual-stats">
            <div>
              <strong>1,240+</strong>
              <span>Issues Resolved</span>
            </div>
            <div>
              <strong>30+</strong>
              <span>Active Wards</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
