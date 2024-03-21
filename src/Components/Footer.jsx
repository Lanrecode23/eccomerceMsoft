import React, { useEffect, useState } from "react";
import "../style/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <div>
      <div>
        <div className="footer-area">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h4 className="footer-heading">Aribiti E-Commerce</h4>
                <div className="footer-underline"></div>
                <p>
                  At Aribiti E-Commerce, we are passionate about providing the
                  best online shopping experience for our customers. With a wide
                  range of products across various categories, we strive to
                  offer convenience, quality, and value.
                </p>
              </div>
              <div className="col-md-3">
                <h4 className="footer-heading">Quick Links</h4>
                <div className="footer-underline"></div>
                <div className="mb-2">
                  <Link to="/" className="text-white">
                    Home
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/about" className="text-white">
                    About Us
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/contact" className="text-white">
                    Contact Us
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/shop" className="text-white">
                    Products
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="footer-heading">Shop Now</h4>
                <div className="footer-underline"></div>
                <div className="mb-2">
                  <Link to="/" className="text-white">
                    Collections
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/" className="text-white">
                    Top Products
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/" className="text-white">
                    Trending Products
                  </Link>
                </div>
                <div className="mb-2">
                  <Link to="/" className="text-white">
                    Latest Products
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <h4 className="footer-heading">Reach Us</h4>
                <div className="footer-underline"></div>
                <div className="mb-2">
                  <p>
                    <i className="fa fa-map-marker"></i>#4, ahlaji adeoye
                    street, lagos state..
                  </p>
                </div>
                <div className="mb-2">
                  <a href="tel:08059487039" className="text-white">
                    <i className="fa fa-phone"></i>+2348059487039
                  </a>
                </div>
                <div className="mb-2">
                  <a href="mailTo:lanrecode23@gmail.com" className="text-white">
                    <i className="fa fa-envelope"></i> lanre23code@gmail.com
                  </a>
                </div>
                <div
                  className="payment-method mt-4 funda"
                  style={{ fontWeight: "bold", wordSpacing: "1.5" }}
                >
                  <p>Payment options :</p>
                  <div className="card-wrap" style={{ cursor: "pointer" }}>
                    <img src="/images/visa.png" alt=""  className="visa"/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h6 style={{fontWeight:'bolder'}}>Sign up for better offers & style news</h6>
            </div>
            <form className="subscribe-form">
              <input
                className="subscribe-input"
                placeholder="example@mail.com"
                type="email"
              />
              <button className="subscribe-btn">Submit</button>
            </form>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p className="">
                  {" "}
                  &copy; {currentYear} - Lanrecode. All rights reserved.
                </p>
              </div>
              <div className="col-md-4">
                <div className="social-media">
                  Get Connected:
                  <a
                    href={`https://www.facebook.com/mhistermatto.dahunsi`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="/">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a
                    href={`https://www.instagram.com/dahunsi.matthew`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a
                    href={`https://wa.me/08059487039`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
