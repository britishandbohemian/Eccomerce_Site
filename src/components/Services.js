import React from "react";

const ServiceItem = ({ iconClass, title, description, delay }) => {
  return (
    <div className="col-lg-4" data-aos="fade-up" data-aos-delay={delay}>
      <div className="service-item d-flex">
        <div className="icon flex-shrink-0">
          <i className={iconClass}></i>
        </div>
        <div>
          <h4 className="title">{title}</h4>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="services">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p>
          Transforming your brand's identity into visually impactful signage
          solutions.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <ServiceItem
            iconClass="bi bi-signpost-2"
            title="Custom Signage Design"
            description="Expertly crafted designs that encapsulate your brand's ethos, ensuring your business stands out."
            delay="100"
          />
          <ServiceItem
            iconClass="bi bi-lightbulb"
            title="Illuminated Signage"
            description="Illuminate your brand with eye-catching lit signs, perfect for high visibility both day and night."
            delay="200"
          />
          <ServiceItem
            iconClass="bi bi-vector-pen"
            title="Vehicle Wraps and Graphics"
            description="Turn your fleet into mobile billboards, maximizing your brand's exposure on the go."
            delay="300"
          />
          <ServiceItem
            iconClass="bi bi-shop"
            title="Retail and Shop Signage"
            description="Enhance your retail space with bespoke signage solutions tailored to engage and attract customers."
            delay="400"
          />
          <ServiceItem
            iconClass="bi bi-brush"
            title="Indoor and Office Signage"
            description="Create a dynamic workplace environment with custom indoor signage that inspires and impresses."
            delay="500"
          />
          <ServiceItem
            iconClass="bi bi-building"
            title="Large Format Printing"
            description="High-quality, large-scale prints for banners, billboards, and more, offering maximum impact and reach."
            delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
