import React from "react";
import "../styles/header.css";
function Header(props) {
  //   console.log(props);
  return (
    <>
      <div className="header">
        <div className="logo-title">
          <img
            src="https://www.goodreturns.in/img/2023/05/images1-1682954992.jpg"
            className="logo"
            alt=""
          />
          <h1 className="title">My News App</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/# ">Services</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              <a href="/#">{props.data.info.name}</a>
            </li>
            <li>
              <img src={props.data.info.picture} alt="" />
            </li>
            <li>
              <button
                onClick={() => {
                  window.localStorage.clear();
                  window.location.assign("http://localhost:3000/");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
