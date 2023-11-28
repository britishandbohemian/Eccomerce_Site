import React from "react";

// Import your assets if needed, for example, an image for the service page

function ServiceDetails() {
  return (
    <main id="main">
      {/* Services Details Page Title & Breadcrumbs */}
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Services Details</h1>
                <p className="mb-0">
                  Discover our wide range of creative and professional signage
                  solutions tailored to bring your brand's vision to life with
                  precision and flair.
                </p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Services Details</li>
            </ol>
          </div>
        </nav>
      </div>
      {/* End Page Title */}

      {/* Service-details Section - Services Details Page */}
      <section id="service-details" className="service-details">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
              {/* Services List */}
              <div className="service-box">
                <h4>Service List</h4>
                <div className="services-list">
                  <a href="#" className="active">
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>Creative Services</span>
                  </a>
                  <a href="#">
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>Installation Services</span>
                  </a>
                  <a href="#">
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>Printing</span>
                  </a>
                  <a href="#">
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>Project Management</span>
                  </a>
                  <a href="#">
                    <i className="bi bi-arrow-right-circle"></i>
                    <span>Resources</span>
                  </a>
                </div>
              </div>
              {/* End Services List */}
              {/* ... additional service boxes if needed ... */}
            </div>

            <div
              className="col-lg-8 ps-lg-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Services Image */}
              <img
                src="./assets/images/welcome.png"
                alt="Services"
                className="img-fluid services-img"
              />
              <h3>Enhance Your Brand with Our Signage Services</h3>
              <p>
                Our services extend beyond mere signage creation. We are
                committed to providing innovative design, durable materials, and
                impeccable installation services. Our project management ensures
                your vision is realized on time and within budget, while our
                comprehensive resources provide ongoing support for the life of
                your sign.
              </p>
              {/* You might list some key benefits or features of your services here */}
              <ul>
                <li>
                  <i className="bi bi-check-circle"></i> Custom-tailored
                  solutions for each client.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> State-of-the-art
                  printing technology for vivid graphics.
                </li>
                <li>
                  <i className="bi bi-check-circle"></i> Eco-friendly options
                  and sustainable practices.
                </li>
              </ul>
              {/* Additional service details can be added here */}
              <p>
                Engage with us and experience the power of impactful signage
                that drives attention and communicates your message effectively.
                Let's illuminate your brand together!
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End Service-details Section */}
    </main>
  );
}

export default ServiceDetails;
