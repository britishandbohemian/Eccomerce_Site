import React from "react";

const HeroSection = () => {
  // Handle form submission if necessary
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 headerText">
            <h2 data-aos="fade-up" data-aos-delay="100">
              <span style={{ fontWeight: "700", color: "red" }}>
                Elevate Your Brand
              </span>
              <br />
              <span style={{ fontWeight: "600", color: "white" }}>
                with Signature Signage
              </span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              At Signs4SA, we specialize in creating custom, high-impact signage
              solutions that capture attention and convey your brand's message.
              Explore our innovative designs and see how we can enhance your
              business visibility.
            </p>
          </div>

          <div className="col-lg-5">
            <form
              action="#"
              className="sign-up-form d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter email address"
              />
              <input
                type="submit"
                className="btn btn-primary"
                value="Sign up"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
