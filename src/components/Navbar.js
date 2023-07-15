import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  
  return (
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} body-tertiary`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
          </ul>
          <button className='btn btn-primary mx-1'>Blue</button>
          <button className='btn btn-success mx-1' >Green</button>
          <button className='btn btn-danger mx-1' >Red</button>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-secondary" type="submit">Search</button>
          </form>
          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-1`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
      title: PropTypes.string.isRequired,
      aboutText: PropTypes.string
}
Navbar.defaultProps = {
      title: 'set title here',
      aboutText: 'about text here'
};