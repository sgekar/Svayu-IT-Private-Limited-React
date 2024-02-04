import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Title from '../components/title'
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
            <img
              alt="image"
              src="/svayu-logo-crop-200h.jpg"
              className="home-image"
            />
            <img alt="image" src="/group%202.svg" className="home-image1" />
          </div>
          <div className="home-links">
            <a
              href="https://www.lipee.in"
              target="_blank"
              rel="noreferrer noopener"
              className="home-text navbarLink"
            >
              Lipee Indic Tech
            </a>
            <a
              href="https://www.svayu.in/#iot"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link navbarLink"
            >
              iOT
            </a>
            <span className="home-text01 navbarLink">Blog</span>
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
            <Title></Title>
            <span className="home-description">
              <span className="home-text02">
                Rejuvenate Your Indic Language Connection
              </span>
              <br className="home-text03"></br>
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
                className="home-link1 button button-gradient"
              >
                Download
              </a>
            </div>
          </div>
          <div className="home-image2">
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
              className="home-image3"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image4"></div>
          <img
            alt="image"
            src="/iot_devices-1200w.jpg"
            className="home-hero-image1"
          />
          <div className="home-content1">
            <span className="home-text10 beforeHeading">iOT and security</span>
            <h1 className="home-text11">
              We have ideas to change how one connects to share
            </h1>
            <span className="home-text12">
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
      <footer className="home-footer">
        <div className="home-links-container">
          <div className="home-container3">
            <div className="footer-column">
              <Link to="/" className="home-navlink">
                Product
              </Link>
              <a
                href="https://www.lipee.in"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                Lipee Indic Keyboards
              </a>
              <span className="home-text13">Blog</span>
            </div>
            <div className="home-container5 footer-column">
              <span className="home-text14">App</span>
              <a
                href="https://play.google.com/store/apps/details?id=in.svayu.lipi"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <span>Download Android app</span>
                <br></br>
                <br></br>
                <br></br>
              </a>
            </div>
            <div className="footer-column">
              <span className="home-text19">Company</span>
              <span className="home-text20">About us</span>
            </div>
            <div className="footer-column">
              <span className="home-text21">Follow</span>
              <a
                href="https://www.twitter.com/SvayuOfficial"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/svayuit"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                Linkedln
              </a>
              <a
                href="https://www.youtube.com/@lipeeitpvtltdgoa632"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
