import React from "react";
import '../style/contact.css'
import Testimonial from "../Components/testimonial";


function About() {
  return (
    <div>
      <img src="/images/about-us.jpg" alt=""  className="about-image"/>
      <h3
        className="mt-3 p-3 funda"
        style={{ width: "100%", fontSize: "18px", lineHeight: "1.8", padding:'2px 10px'}}
      >
        Welcome to Aribiti Ecom, your destination for Home appliances, grocery ,
        jewelery etc. Established in 2021, we have been proudly serving
        customers worldwide with our exceptional range of product/service
        category. At Aribiti E-Commerce, we are passionate about providing the
        best online shopping experience for our customers. With a wide range of
        products across various categories, we strive to offer convenience,
        quality, and value. By embracing these principles, we ensure that every
        product we offer meets the highest standards of quality, reliability,
        and customer satisfaction. Beyond our commitment to our customers, we
        are dedicated to giving back to the community.By doing so, we aim to
        make a positive impact and contribute to a better world. Thank you for
        choosing Aribiti Ecom. We look forward to serving you and providing you
        with an exceptional shopping experience. We are humbled by the trust our
        customers place in us and the positive feedback we receive. Here are
        some testimonials from our satisfied customers:
      </h3>
      <Testimonial/>
    </div>
  );
}

export default About;
