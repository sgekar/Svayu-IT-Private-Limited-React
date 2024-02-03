import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Svayu IT Private Limited</title>
        <meta property="og:title" content="Svayu IT Private Limited" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img alt="image" src="/group%202.svg" className="home-image" />
            <span className="brandName">Svayu</span>
          </div>
          <div className="home-links">
            <span className="home-text01 navbarLink">Lipee Indic Tech</span>
            <span className="home-text02 navbarLink">iOT</span>
            <span className="home-text03 navbarLink">Blog</span>
            <button className="home-button button-secondary button">
              Log in
            </button>
            <button className="button button-primary">
              Download Lipee Keyboard
            </button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="home-hero hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle beforeHeading">
              ENABLING Bharat 
            </span>
            <h1 className="home-title">Lipee Indic Keyboards</h1>
            <span className="home-description">
              <span className="home-text04">
                Rejuvenate Your Indic Language Connection
              </span>
              <br className="home-text05"></br>
              <br></br>
              <span>
                We bet you type in your mother tongue using your own script. We
                are also sure that Indic script typing is painful and slow.
              </span>
              <br></br>
              <br></br>
              <span>
                Install Indic Devanagari Keyboard from Android Play Store to
                upgrade your Indic-script experience. We have 350,000+ downloads
                30,000 active users and 4.1* rating. It is rated 5* for heavy
                text users of Devanagari script, check for yourself!
              </span>
              <br></br>
            </span>
            <div className="home-container1">
              <a
                href="https://play.google.com/store/apps/details?id=in.svayu.lipi"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link button button-gradient"
              >
                Download
              </a>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/layout-main-400w.png"
              loading="lazy"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/union-300h.png"
              className="home-graphic-top"
            />
            <img
              alt="image"
              src="/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3"></div>
          <img
            alt="image"
            src="/iot_devices-1200w.jpg"
            className="home-hero-image1"
          />
          <div className="home-content1">
            <span className="home-text12 beforeHeading">Security</span>
            <h1 className="home-text13">
              We have ideas to change how one connects to share
            </h1>
            <span className="home-text14">
              Secure mobile connections for service delivery platforms
            </span>
            <div className="home-container2">
              <button className="button-secondary button bg-transparent">
                Under Construction
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container"></div>
      <div className="home-section2 section-container">
        <div className="home-max-width3 max-width"></div>
      </div>
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container3">
            <div className="footer-column">
              <span className="home-text15">Product</span>
              <span className="home-text16">Lipee Indic Keyboards</span>
              <span className="home-text17">Blog</span>
            </div>
            <div className="footer-column">
              <span className="home-text18">App</span>
              <span className="home-text19">Download Android app</span>
              <span>Privacy Policy</span>
            </div>
            <div className="footer-column">
              <span className="home-text21">Company</span>
              <span className="home-text22">About us</span>
              <span>Contact</span>
            </div>
            <div className="footer-column">
              <span className="home-text24">Follow</span>
              <span className="home-text25">Twitter</span>
              <span className="home-text26">Linkedln</span>
              <span>Youtube</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
