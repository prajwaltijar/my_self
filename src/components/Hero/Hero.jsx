import React from 'react'
import './Hero.css'

const Icons = {
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  ),
  arrowUpRight: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  ),
  arrowDown: (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <polyline points="19 12 12 19 5 12"></polyline>
    </svg>
  ),
  rocket: (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
  ),
  code: (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  smartphone: (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
  ),
  user: (
    <svg width="1.2em" height="1.2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span> Available for opportunities
          </div>

          <div className="hero__greeting">HELLO, I'M</div>
          <h1 className="hero__title">
            <span className="hero__name">Ruchita</span>
            <span className="hero__surname">Bhandarkar</span>
          </h1>
          <h2 className="hero__subtitle">AI & Machine Learning Engineer</h2>

          <p className="hero__description">
            Passionate about building intelligent systems. Strong foundations in Python, Machine Learning, Deep Learning, and Computer Vision. Seeking to solve real-world problems through data.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn-primary">
              View My Work <span className="btn-icon">{Icons.arrowUpRight}</span>
            </a>
            <a href="/resume.pdf" className="btn-secondary" download>
              Resume <span className="btn-icon">{Icons.arrowDown}</span>
            </a>
          </div>

          {/* <div className="hero__features">
            <div className="hero__feature-card">
              <span className="feature-icon">{Icons.rocket}</span>
              <div>
                <strong>Modern & Fast</strong>
                <p>Clean, performant architectures.</p>
              </div>
            </div>
            <div className="hero__feature-card">
              <span className="feature-icon">{Icons.code}</span>
              <div>
                <strong>Scalable Code</strong>
                <p>Well-structured and reusable.</p>
              </div>
            </div>
            <div className="hero__feature-card">
              <span className="feature-icon">{Icons.smartphone}</span>
              <div>
                <strong>Responsive Design</strong>
                <p>Perfect on all devices.</p>
              </div>
            </div>
            <div className="hero__feature-card">
              <span className="feature-icon">{Icons.user}</span>
              <div>
                <strong>User Focused</strong>
                <p>Intuitive user experiences.</p>
              </div>
            </div>
          </div> */}

          <div className="hero__bottom-socials">
            <span className="hero__socials-label">LET'S CONNECT</span>
            <div className="hero__socials-links">
              <a href="https://github.com/ruchita-bhandarkarbhandarkar" target="_blank" rel="noreferrer" aria-label="GitHub">
                {Icons.github}
              </a>
              <a href="https://linkedin.com/in/ruchita-bhandarkar" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                {Icons.linkedin}
              </a>
              <a href="mailto:ruchitabhandarkar1052003@gmail.com" aria-label="Email">
                {Icons.mail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero