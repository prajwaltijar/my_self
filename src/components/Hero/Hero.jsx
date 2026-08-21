import React from 'react'

import './Hero.css'
import heroImage from '../../assets/hero.png'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__grid" />
      <div className="hero__orb hero__orb--one" />
      <div className="hero__orb hero__orb--two" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__eyebrow"><span /> Portfolio 2025</p>
          <h1 className="hero__title">i love you <em>ruchu</em><br />love you so much...</h1>
          <p className="hero__description">A creative portfolio for ideas, stories and digital experiences made with care.</p>
          <div className="hero__actions">
            <a className="hero__button" href="#work">Explore my work <span>↗</span></a>
            <a className="hero__text-link" href="#contact">Let's connect <span>↓</span></a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__visual-ring" />
          <img src={heroImage} alt="Abstract colorful 3D artwork" />
          <p className="hero__visual-label">Designing<br /><strong>with feeling</strong></p>
        </div>
      </div>
      <div className="hero__footer"><span>Scroll to explore</span><span className="hero__line" /><span>01 / 05</span></div>
    </section>
  )
}

export default Hero