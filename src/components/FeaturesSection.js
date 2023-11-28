import React from "react";
import featureImage1 from "../assets/img/feature1.png";
import featureImage2 from "../assets/img/feature2.png";
import featureImage3 from "../assets/img/feature3.png";

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container section-title" data-aos="fade-up">
        <h2>Explore Our Signature Services</h2>
        <p>
          Stand out with Signs4SA - where your brand's vision becomes a vivid
          reality.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4 align-items-center features-item">
          <div
            className="col-lg-5 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Custom Business Signage</h3>
            <p>
              Capture the essence of your brand with our bespoke business
              signage solutions. From elegant storefronts to impactful interior
              designs, let us help you make a lasting impression. Ready to
              elevate your brand? Chat with 'Tildo', our AI assistant, for
              instant assistance!
            </p>
            <button className="btn btn-get-started">Talk to Tildo</button>
          </div>
          <div
            className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <img
              src={featureImage1}
              alt="Custom Business Signage"
              className="img-fluid"
            />
          </div>
        </div>

        <div className="row gy-4 align-items-stretch justify-content-between features-item">
          <div
            className="col-lg-6 d-flex align-items-center features-img-bg"
            data-aos="zoom-out"
          >
            <img
              src={featureImage2}
              className="img-fluid"
              alt="Interactive Digital Displays"
            />
          </div>
          <div
            className="col-lg-5 d-flex justify-content-center flex-column"
            data-aos="fade-up"
          >
            <h3>Interactive Digital Displays</h3>
            <p>
              Engage and inform with our cutting-edge digital displays. Ideal
              for high-traffic areas, these dynamic solutions are designed to
              grab attention and communicate effectively. Discover the digital
              difference – chat with Tildo now for a quick consultation.
            </p>
            <button className="btn btn-get-started align-self-start">
              Start a Chat
            </button>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item">
          <div
            className="col-lg-5 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3>Mobile Advertising with Vehicle Wraps</h3>
            <p>
              Transform your fleet into a mobile marketing force with our
              eye-catching vehicle wraps. Durable, striking, and cost-effective,
              our wraps ensure your message travels far and wide. Get on the
              road to visibility – Tildo is here to guide you through the
              process.
            </p>
            <button className="btn btn-get-started">Get a Quote</button>
          </div>
          <div
            className="col-lg-7 order-1 order-lg-2 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="100"
          >
            <img
              src={featureImage3}
              alt="Mobile Advertising with Vehicle Wraps"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
