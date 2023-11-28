import React, { useState, useEffect } from "react";

const testimonialsData = [
  {
    imgSrc: "assets/img/testimonials/testimonials-1.png",
    name: "Mike",
    title: "CEO, XYZ Corporation",
    review:
      "Signs4SA provided exceptional service and delivered a high-quality product that exceeded our expectations. Their team's attention to detail and creativity brought our vision to life.",
  },
  {
    imgSrc: "assets/img/testimonials/testimonials-2.png",
    name: "Kendra",
    title: "Marketing Director, ABC Ltd.",
    review:
      "The team at Signs4SA went above and beyond to ensure our marketing materials were not only visually stunning but also effectively conveyed our brand message.",
  },
  {
    imgSrc: "assets/img/testimonials/testimonials-3.png",
    name: "Leilane Smith",
    title: "Project Manager, Creative Solutions",
    review:
      "Working with Signs4SA has been a game-changer for our projects. Their attention to detail and commitment to quality is unmatched in the industry.",
  },
];

const TestimonialItem = ({ imgSrc, name, title, review }) => {
  return (
    <div className="testimonial-item">
      <div className="d-flex">
        <img
          src={imgSrc}
          className="testimonial-img flex-shrink-0"
          alt={name}
        />
        <div>
          <h3>{name}</h3>
          <h4>{title}</h4>
          {/* Add star icons as needed */}
        </div>
      </div>
      <p>
        <i className="bi bi-quote quote-icon-left"></i>
        {review}
        <i className="bi bi-quote quote-icon-right"></i>
      </p>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 3000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-lg-5 info"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3>Testimonials</h3>
            <p>Our clients speak for our quality and service.</p>
          </div>

          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={index}
                style={{
                  display: index === activeIndex ? "block" : "none",
                }}
              >
                <TestimonialItem {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
