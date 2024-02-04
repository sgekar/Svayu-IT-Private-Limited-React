import React from 'react'

import PropTypes from 'prop-types'

import './title.css'

const Title = (props) => {
  return (
    <div className="title-container">
      <a
        href={props.linkTitle}
        target="_blank"
        rel="noreferrer noopener"
        className="title-link"
      >
        <h1 className="title-title">{props.title}</h1>
      </a>
    </div>
  )
}

Title.defaultProps = {
  linkTitle: 'https://play.google.com/store/apps/details?id=in.svayu.lipi',
  title: 'Lipee Indic Keyboards',
}

Title.propTypes = {
  linkTitle: PropTypes.string,
  title: PropTypes.string,
}

export default Title
