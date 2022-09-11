

import React from "react";
import "../assets/css/NavbarHome.css";
import { Link } from "react-router-dom";
import tiger_icon from "../assets/images/tiger_icon_nav.png";
import GDSC_icon from "../assets/images/GDSC_icon.png";
function Navbar() {
  return (
    <div>
      <nav className="navbarHomeContainer">
        <div className="navbarHomeContainer1">
          <div className="navbarTigerIconContainer">
            <Link to={"/"}>
              <img
                className="navbarTigerIcon"
                src={tiger_icon}
                alt="tiger icon"
              />
            </Link>
          </div>
          <div className="navbarHomeSection2">
            <div>
              <span className="navbarHomeSection2Span">
                <Link to={"/"}>TigerDev</Link>{" "}
              </span>{" "}
              X GTBIT
            </div>
            <div className="navbarHomeSection2SearchContainer">
              <i className="bi bi-search"></i>
              <input
                className="navbarHomeSection2SearchBar"
                type={"text"}
                placeholder="Search items, Collections"
              ></input>
            </div>
            <div className="navbarHomeSection2part3">
              <div>
                <Link to={"/Collections"}>COLLECTION</Link>
              </div>
              {/* <div>MINT NOW</div> */}
              <div>WHITE PAPER</div>
              <div>
                <Link to={"/team"}>TEAM</Link>
              </div>
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
          <a className="navbar-brand" href="/">
            <div className="navbarTigerIconContainer">
              <img
                className="navbarTigerIcon"
                src={tiger_icon}
                alt="tiger icon"
              />
            </div>
          </a>
          <button
            className="navbar-toggler navbarReponsiveButton"
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
              <Link to={"/"}>
                <img
                  className="navbarGDSCIcon"
                  src={GDSC_icon}
                  alt="GDSC LOGO"
                />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body navbarResponsiveFlex">
              <div className="nav-mob-list">
                <Link to={"/"}>Home</Link>
              </div>

              <div className="nav-mob-list">
                <Link to={"/Collections"}>COLLECTION</Link>
              </div>
              {/* <div >
                  <a className="nav-link" href="#">
                  MINT NOW
                  </a>
                </div> */}
              <div className="nav-mob-list" >WHITE PAPER</div>
              <div className="nav-mob-list">
                <Link to={"/team"}>TEAM</Link>
              </div>
              <div className="nav-mob-list">ABOUT</div>
              <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search items, Collections"
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
















// import React from "react";
// import {useEffect,useState} from 'react';  
// import "../assets/css/NavbarHome.css";
// import { Link } from "react-router-dom";
// import tiger_icon from "../assets/images/tiger_icon_nav.png";
// import GDSC_icon from "../assets/images/GDSC_icon.png";

// function Navbar() {
//   const [walletAddress, setWalletAddress] = useState(null);

//   const checkIfWalletIsConnected = async () => {
//     try {
//       const { solana } = window;

//       if (solana) {
//         if (solana.isPhantom) {
//           console.log("Wallet Found");
//           alert("Wallet already connected !! ")

//           const response = await solana.connect({ onlyIfTrusted: true });

//           console.log(
//             "connected with publickey:",
//             response.publicKey.toString()
//           );
//           setWalletAddress(response.publicKey.toString());
//         }
//       } else {
//         alert("Get A Phantom wallet!")
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const connectWallet = async () => {
//     const { solana } = window;
//    await checkIfWalletIsConnected();
//     if (solana) {
//       const response = await solana.connect();
//       console.log("connected with public key", response.publicKey);
//       // if(response.publicKey.toString())
//       console.log(response)
//       setWalletAddress(response.publicKey.toString());

//     }
//   };

//   // useEffect(() => {
//   //   const onLoad = async () => {
//   //     await checkIfWalletIsConnected();
//   //   };

//   //   window.addEventListener("load", onLoad);
//   //   return () => window.removeEventListener("load", onLoad);
//   // }, []);

//   return (
//     <div>
//       <nav className="navbarHomeContainer">
//         <div className="navbarHomeContainer1">
//           <div className="navbarTigerIconContainer">
//             <Link to={"/"}>
//               <img
//                 className="navbarTigerIcon"
//                 src={tiger_icon}
//                 alt="tiger icon"
//               />
//             </Link>
//           </div>
//           <div className="navbarHomeSection2">
//             <div>
//               <span className="navbarHomeSection2Span">
//                 <Link to={"/"}>TigerDev</Link>{" "}
//               </span>{" "}
//               X GTBIT
//             </div>
//             <div className="navbarHomeSection2SearchContainer">
//               <i className="bi bi-search"></i>
//               <input
//                 className="navbarHomeSection2SearchBar"
//                 type={"text"}
//                 placeholder="Search items, Collections"
//               ></input>
//             </div>
//             <div className="navbarHomeSection2part3">
//               <div>
//                 <Link to={"/Collections"}>COLLECTION</Link>
//               </div>
//               {/* <div>MINT NOW</div> */}
//               <div>WHITE PAPER</div>
//               <div>
//                 <Link to={"/team"}>TEAM</Link>
//               </div>
//               <div>ABOUT</div>
//               <div>
//                 <i className="bi bi-person-circle"></i>
//               </div>
//               <div>
//                 <i onClick={connectWallet} className="bi bi-wallet"></i>
//               </div>
//             </div>
//           </div>
//           <div>
//             <img className="navbarGDSCIcon" src={GDSC_icon} alt="GDSC LOGO" />
//           </div>
//         </div>
//       </nav>
//       <nav className="navbar navbar-dark bg-dark fixed-top navbarReponsive">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="/">
//             <div className="navbarTigerIconContainer">
//               <img
//                 className="navbarTigerIcon"
//                 src={tiger_icon}
//                 alt="tiger icon"
//               />
//             </div>
//           </a>
//           <button
//             className="navbar-toggler navbarReponsiveButton"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#offcanvasDarkNavbar"
//             aria-controls="offcanvasDarkNavbar"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div
//             className="offcanvas offcanvas-end text-bg-dark"
//             tabIndex="-1"
//             id="offcanvasDarkNavbar"
//             aria-labelledby="offcanvasDarkNavbarLabel"
//           >
//             <div className="offcanvas-header">
//               <Link to={"/"}>
//                 <img
//                   className="navbarGDSCIcon"
//                   src={GDSC_icon}
//                   alt="GDSC LOGO"
//                 />
//               </Link>
//               <button
//                 type="button"
//                 className="btn-close btn-close-white"
//                 data-bs-dismiss="offcanvas"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div className="offcanvas-body navbarResponsiveFlex">
//               <div className="nav-mob-list">
//                 <Link to={"/"}>Home</Link>
//               </div>

//               <div className="nav-mob-list">
//                 <Link to={"/Collections"}>COLLECTION</Link>
//               </div>
//               {/* <div >
//                   <a className="nav-link" href="#">
//                   MINT NOW
//                   </a>
//                 </div> */}
//               <div className="nav-mob-list">WHITE PAPER</div>
//               <div className="nav-mob-list">
//                 <Link to={"/team"}>TEAM</Link>
//               </div>
//               <div className="nav-mob-list">ABOUT</div>
//               <div className="person_wallet_box">
//                 <div>
//                   <i className="bi bi-person-circle"></i>
//                 </div>
//                 <div>
//                   <i className="bi bi-wallet"></i>
//                 </div>
//               </div>
//               <form className="d-flex" role="search">
//                 <input
//                   className="form-control me-2"
//                   type="search"
//                   placeholder="Search items, Collections"
//                   aria-label="Search"
//                 />
//                 <button className="btn btn-success" type="submit">
//                   Search
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
