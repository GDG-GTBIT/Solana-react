import React from "react";
import "../assets/css/NavbarHome.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar-class">
        <div className="navbar-brand-image">
          <img src="" alt="" />
        </div>
        <div className="navbar-title">
          <span>Tiger Dev </span>X Gtbit
        </div>
        <div className="wrapper">
          <div className="navbar-search">
            <i className="bi bi-search"></i>
            <input
              type="text"
              placeholder="Search items, Collections"
              className="navbar-input"
            />
          </div>
          <div className="navbar-pages">
            <a href="/" className="navbar-links">
              Collection
            </a>
            <a href="/" className="navbar-links">
              Mint Now
            </a>
            <a href="/" className="navbar-links">
              White Paper
            </a>
            <a href="/" className="navbar-links">
              About
            </a>
          </div>
          <div className="navbar-icons">
            <a href="/" className="nav-link">
              <i class="bi bi-person-circle"></i>
            </a>
            <a href="/" className="nav-link">
              <i class="bi bi-wallet"></i>
            </a>
          </div>
        </div>
        <div className="navbar-logo">
          <img src="" alt="" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
