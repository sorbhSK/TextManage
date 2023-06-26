import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const myStyleOne = {
    backgroundColor: props.mode === "light" ? "white" : "#1b2142",
    color: props.mode === "light" ? "black" : "white"
  }
  const myStyleTwo = {
    backgroundColor: props.ThemeColor,
    color: "white"
  }
  const setMyStyle = props.modeType ? myStyleTwo : myStyleOne

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/" style={setMyStyle}>TextUtils</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/" style={setMyStyle}>HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-2" to="/about" style={setMyStyle}>ABOUT</Link>
              </li>
            </ul>
          </div>
          <div className='ColorTheme'>
            <span className='d-inline-block' onClick={props.ThemeOne}></span>
            <span className='d-inline-block' onClick={props.ThemeTwo}></span>
            <span className='d-inline-block' onClick={props.ThemeThree}></span>
            <span className='d-inline-block' onClick={props.ThemeFour}></span>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input cursorClass" value={props.mode} onChange={props.SetPageMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label className="form-check-label cursorClass" htmlFor="flexSwitchCheckChecked" style={setMyStyle}>Enable {props.mode === "light" ? "Dark" : "Light"} Mode</label>
          </div>
        </div>
      </nav>
    </div>
  )
}
