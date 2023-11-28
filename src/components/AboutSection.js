import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="row align-items-xl-center gy-5">
          <div className="col-xl-5 content">
            <h3>About Signs4SA</h3>
            <h2>Leading the Way in Innovative Signage Solutions</h2>
            <p>
              At Signs4SA, we blend creativity with technology to deliver
              signage solutions that not only meet but exceed our clients'
              expectations. Our commitment to quality and our attention to
              detail have made us a preferred partner for businesses across
              various sectors. From conceptualization to installation, we ensure
              every sign we create is a testament to our craftsmanship and
              dedication to excellence.
            </p>
            <a href="#" className="read-more">
              <span>Discover Our Journey</span>
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>

          <div className="col-xl-7">
            <div className="row gy-4 icon-boxes">
              <IconBox
                title="Custom Creations"
                iconClass="bi bi-buildings"
                delay="200"
                description="Tailor-made signs designed to align perfectly with your brand's identity and message."
              />
              <IconBox
                title="Quality and Durability"
                iconClass="bi bi-clipboard-pulse"
                delay="300"
                description="We use cutting-edge materials and techniques to ensure your signs stand the test of time."
              />
              <IconBox
                title="Full-Service Expertise"
                iconClass="bi bi-command"
                delay="400"
                description="From design and manufacturing to installation and maintenance, we cover all your signage needs."
              />
              <IconBox
                title="Innovative Technology"
                iconClass="bi bi-graph-up-arrow"
                delay="500"
                description="Leveraging the latest technology to create signs that are not just signs, but landmarks."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const IconBox = ({ title, iconClass, delay, description }) => {
  return (
    <div className="col-md-6">
      <div className="icon-box">
        <i className={iconClass}></i>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutSection;
