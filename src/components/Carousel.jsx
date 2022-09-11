import React from "react";
import "../assets/css/carousel.css";
import tiger_icon1 from "../assets/images/NFT 1.png";
import tiger_icon2 from "../assets/images/NFT 2.png";
import tiger_icon3 from "../assets/images/NFT 3.png";
import tiger_icon4 from "../assets/images/NFT 4.png";
function Carousel() {
  const ImgData = [
    {
      src: `${tiger_icon2}`,
      alt: "Carsouel1",
    },
    {
      src:`${tiger_icon3}`,
      alt: "Carsouel2",
    },
    {
      src: `${tiger_icon4}`,
      alt: "Carsouel3",
    },
  ];
  return (
    <div
      id="carouselExampleControls"
      className="carousel carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="imgCaroselContainer">
            <img src={`${tiger_icon1}`} className="CaroselImg" alt={ImgData[0].alt} />
          </div>
        </div>
        {ImgData.map((value, idx) => (
          <div key={idx} className="carousel-item">
            <div className="imgCaroselContainer">
              <img src={value.src} className="CaroselImg" alt={value.alt} />
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;