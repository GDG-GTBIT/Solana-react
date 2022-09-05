import React from "react";
import "../assets/css/NavbarHome.css";
import tiger_icon from "../assets/images/tiger_icon_nav.png";
import GDSC_icon from "../assets/images/GDSC_icon.png";
function Navbar() {
  return (
    <div>
      <nav className="navbarHomeContainer">
        <div className="navbarHomeContainer1">
          <div className="navbarTigerIconContainer">
            <img
              className="navbarTigerIcon"
              src={tiger_icon}
              alt="tiger icon"
            />
          </div>
          <div className="navbarHomeSection2">
            <div>
              <span className="navbarHomeSection2Span">TigerDev</span> X GTBIT
            </div>
            <div className="navbarHomeSection2SearchContainer">
              <i className="bi bi-search"></i>
              <input
                className="navbarHomeSection2SearchBar"
                type={"text"}
                placeholder="search Item,collectibles etc"
              ></input>
            </div>
            <div className="navbarHomeSection2part3">
              <div>COLLECTION</div>
              <div>MINT NOW</div>
              <div>WHITE PAPER</div>
              <div>ABOUT</div>
              <div>
                <i className="bi bi-person-circle"></i>
              </div>
              <div>
                <i className="bi bi-wallet"></i>
              </div>
            </div>
          </div>
          <div>
            <img className="navbarGDSCIcon" src={GDSC_icon} alt="GDSC LOGO" />
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-dark bg-dark fixed-top navbarReponsive">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <div className="navbarTigerIconContainer">
            <img
              className="navbarTigerIcon"
              src={tiger_icon}
              alt="tiger icon"
            />
          </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-dark"
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className="offcanvas-header">
              <img className="navbarGDSCIcon" src={GDSC_icon} alt="GDSC LOGO" />
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    COLLECTION
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MINT NOW
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    WHITE PAPER
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search , items , Collectibles"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
