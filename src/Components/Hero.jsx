import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "../style/Hero.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Hero() {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const navigate = useNavigate();

  // handle the shop navigation to go to the product page
  const handleShop = () => {
    navigate("/shop");
  };

  return (
    <div>
      {!isLoggedIn ? (
        <>
          <div className="hero-container funda">
            <h3>Best Ecommerce Solutions to Get the best products </h3>
            <p>
              At Aribitee E-Commerce, we are passionate about providing the best
              online shopping experience for our customers. With a wide range of
              products across various categories, we strive to offer
              convenience, quality, and value.
            </p>
            <div className="button ">
              <button className="buttonShop" onClick={handleShop}>{" "}Shop now </button>
            </div>
          </div>
        </>
      ) : (
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className="carousel-item-large">
            <img
              src="/images/hero-image.jpg"
              className="d-block w-100 init"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-large">
            <img
              src="/images/hero-image1.jpg"
              className="d-block w-100 init"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item-large">
            <img
              src="/images/banner1.jpg"
              className="d-block w-100 init"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      )}
    </div>
  );
}

export default Hero;
