import React from "react";
import "../style/Hero.css";

function Section() {
  return (
    <div>
      <section className="feature-area section_gap_bottom_custom">
        <div className="container mt-5 mb-5" >
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-feature">
                <div className="title" data-aos="zoom-in">
                  <img src="/images/icon1.png" alt="" />
                  <h3>Money back guarantee</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 ">
              <div className="single-feature">
                <div className="title" data-aos="zoom-in">
                  <img src="/images/icon2.png" alt="" />
                  <h3>Free Delivery</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <div className="title" data-aos="zoom-in">
                  <img src="/images/icon5.png" alt="" />
                  <h3>Always support</h3>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-feature">
                <div className="title" data-aos="zoom-in">
                 <img src="/images/icon6.png" alt="" />
                  <h3>Secure payment</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section;
