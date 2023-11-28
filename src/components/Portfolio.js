import React, { useState, useEffect } from "react";

const PortfolioItem = ({
  imgSrc,
  title,
  description,
  detailsLink,
  galleryLink,
}) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item isotope-item">
      <img src={imgSrc} className="img-fluid" alt={title} />
      <div className="portfolio-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={galleryLink} title={title} className="glightbox preview-link">
          <i className="bi bi-zoom-in"></i>
        </a>
        <a href={detailsLink} title="More Details" className="details-link">
          <i className="bi bi-link-45deg"></i>
        </a>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    fetch("http://156.38.250.162:3360/Signs.php")
      .then((response) => response.json())
      .then((data) => setPortfolioItems(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Creative Showcase</h2>
        <p>
          Explore our diverse portfolio of signage projects, each crafted to
          perfection...
        </p>
      </div>

      <div className="container">
        <div
          className="row gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {portfolioItems.map((item) => (
            <PortfolioItem
              key={item.id}
              imgSrc={process.env.PUBLIC_URL + "/" + item.image_url}
              title={item.name}
              description={item.description}
              detailsLink="portfolio-details.html"
              galleryLink={process.env.PUBLIC_URL + "/" + item.image_url}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
