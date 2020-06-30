import React from 'react'
import './HeroText.scss'
import Lottie from 'react-lottie'
import Eyeballs from '../../../assets/lotties/eyeballs.json'

function HeroText() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Eyeballs,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <div className="Hero">
      <div className="Hero_circle"></div>
      <div className="Hero_text">
        <div class="Hero_text_header">Hi!</div>
        <p>
          <span className="p_text">
            I'm <span className="span_name">WynStudent.</span>
          </span>
        </p>
        <p>
          <span className="p_text">I am a Front-End </span>
          <span className="Hero_text_span1"> Developer</span>
        </p>
        <p>
          {' '}
          <span className="Hero_text_span3">and</span>{' '}
          <span className="p_text"> an enthusiastic</span>
        </p>
        <p>
          <span className="Hero_text_span2">problem solver</span>
        </p>
      </div>
      <div class="hero_lottie">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  )
}

export default HeroText
