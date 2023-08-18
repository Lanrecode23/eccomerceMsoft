import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/testiminial.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";

function Testimonial() {
  const options = {
    margin: 2,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 1,
        },
        1000: {
            items: 3,
        }
    },
};

  return (
    <>
      <div className="comment funda">
        <h3>Testimonials</h3>
      </div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="bcg">
            <div className="anImage">
              <img src="/images/avatar-anisha.png" alt="" />
            </div>
            <div className="anisha">
              <h4>Anisha Li</h4>
              <p className="funda">
                "The product I bought from this website is fantastic! It's
                exactly as described, and the shipping was super quick. I highly
                recommend it to anyone."
              </p>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="bcg">
            <div className="anImage">
              <img src="/images/avatar-ali.png" alt="" />
            </div>
            <div className="ali">
              <h4>Ali Bravo</h4>
              <p>
                "I love shopping at this e-commerce store! The website is
                user-friendly, and I always find what I'm looking for. Plus,
                their discounts and deals are unbeatable."
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="bcg">
            <div className="anImage">
              <img src="/images/avatar-richard.png" alt="" />
            </div>
            <div className="anisha">
              <h4>Richard Adamu</h4>
              <p>
                "I received my order today, and it was carefully packaged to
                avoid any damage during shipping. The attention to detail shows
                they really care about their customers."
              </p>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="bcg">
            <div className="anImage">
              <img src="/images/avatar-shanai.png" alt="" />
            </div>
            <div className="anisha">
              <h4>Carol Dapo</h4>
              <p>
                "I was impressed by the fast delivery and excellent customer
                service. The product quality exceeded my expectations, and I'm
                definitely coming back for more!""
              </p>
            </div>
          </div>
        </div>
      </OwlCarousel>
    </>
  );
}

export default Testimonial;
