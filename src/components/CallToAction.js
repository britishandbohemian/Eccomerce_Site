import React from "react";
import ctaBgImage from "../assets/img/cta.png"; // Adjust the path according to your project structure

const CallToAction = () => {
  return (
    <section
      id="call-to-action"
      className="call-to-action"
      style={{
        backgroundImage: `url(${ctaBgImage})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div
          className="row justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="col-xl-10">
            <div className="text-center">
              <h3>Transform Your Brand Today</h3>
              <p>
                Elevate your business presence with custom signage solutions
                that make a difference. Whether you're looking to boost brand
                visibility, enhance customer engagement, or simply make a
                statement, Signs4SA is here to bring your vision to life. Don't
                wait for opportunity — create it. Reach out now to begin your
                signage journey with us.
              </p>
              <a className="cta-btn" href="mailto:contact@signs4sa.com">
                Email Us Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
