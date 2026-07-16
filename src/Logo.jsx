import "./Logo.css";

function Logo() {
  return (
    <div className="trackserve-logo" aria-label="TrackServe logo">
      <span className="trackserve-mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
          <defs>
            <linearGradient id="logoGradient" x1="14" y1="14" x2="50" y2="50" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1D60C4" />
              <stop offset="1" stopColor="#21A17B" />
            </linearGradient>
          </defs>
          <path d="M32 6C18.7 6 8 16.7 8 30c0 13.7 12.5 27.9 22 34.4.6.4 1.4.4 2 0 9.5-6.5 22-20.7 22-34.4C56 16.7 45.3 6 32 6Z" fill="url(#logoGradient)" />
          <path d="M22.5 33.5c0-5.2 4.2-9.4 9.4-9.4 1.5 0 2.9.4 4.1 1.1l1.9-2.6c-1.6-1.1-3.5-1.8-5.9-1.8-6.5 0-11.8 5.3-11.8 11.8 0 6.5 5.3 11.8 11.8 11.8 2.4 0 4.4-.7 5.9-1.8l-1.9-2.6c-1.2.7-2.6 1.1-4.1 1.1-5.2 0-9.4-4.2-9.4-9.4Z" fill="#FFF" />
          <path d="M30 46c1.7.9 3.8 1.4 6 1.4 4.7 0 8.5-2.5 10.8-6.3l-2.9-1.8c-1.6 2.5-4.4 4.1-7.9 4.1-1.8 0-3.5-.4-5-1.1L30 46Z" fill="#FFF" opacity="0.8" />
        </svg>
      </span>
      <span className="trackserve-logo-copy">
        <span className="trackserve-logo-title">TrackServe</span>
        <span className="trackserve-logo-subtitle">Municipal Issue Reporting</span>
      </span>
    </div>
  );
}

export default Logo;
