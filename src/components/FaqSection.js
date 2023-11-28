import React, { useState } from "react";

const FaqItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <h3 onClick={toggleOpen}>
        <span className="num">{index}.</span>
        <span>{question}</span>
        <i
          className={`faq-toggle bi ${
            isOpen ? "bi-chevron-down" : "bi-chevron-right"
          }`}
        ></i>
      </h3>
      {isOpen && (
        <div className="faq-content">
          <p className="FaqContent">{answer}</p>
        </div>
      )}
    </div>
  );
};

// Rest of your FaqSection component remains the same

const FaqSection = () => {
  const faqs = [
    {
      question: "What types of signage solutions does Signs4SA offer?",
      answer:
        "Signs4SA specializes in a wide range of signage solutions including outdoor signs, indoor signs, digital billboards, vehicle wraps, and custom business signage. Our team is equipped to handle all your signage needs from design to installation.",
    },
    {
      question: "How long does it take to design and install custom signage?",
      answer:
        "The timeline for designing and installing custom signage varies depending on the complexity of the project. On average, most signs are designed, produced, and installed within 2-4 weeks.",
    },
    {
      question: "Can Signs4SA help with obtaining permits for outdoor signage?",
      answer:
        "Yes, we assist with the entire permitting process for outdoor signs. Our team is knowledgeable about local regulations and will ensure your sign complies with all city and municipal guidelines.",
    },
    {
      question: "Are digital billboards effective for advertising?",
      answer:
        "Digital billboards are highly effective for advertising as they offer high visibility, dynamic content change, and target a broad audience. They are ideal for businesses looking to increase brand awareness and reach.",
    },
    {
      question:
        "What materials are used for outdoor signs to ensure durability?",
      answer:
        "Our outdoor signs are made from high-quality, durable materials like aluminum, acrylic, PVC, and vinyl to ensure longevity and resistance to weather conditions.",
    },
    {
      question: "How can I maintain and clean my signage to ensure longevity?",
      answer:
        "Regular cleaning with mild soap and water, along with periodic inspections, will help maintain your signage. Avoid abrasive cleaners and consult with our team for specific maintenance tips based on your sign type.",
    },
    {
      question:
        "Can Signs4SA design signs that align with my brand's aesthetic?",
      answer:
        "Absolutely. Our design team works closely with clients to create signage that perfectly aligns with their brand identity, using brand colors, logos, and fonts to ensure brand consistency.",
    },
    {
      question: "Do you offer eco-friendly signage options?",
      answer:
        "Yes, we offer a range of eco-friendly signage options that use sustainable materials and energy-efficient LED lighting, catering to environmentally conscious businesses.",
    },
    {
      question:
        "What is the process for getting a quote for a signage project?",
      answer:
        "To get a quote, contact us with your signage requirements, and we will provide a detailed estimate based on the design, materials, size, and installation needs.",
    },
    {
      question: "How do vehicle wraps benefit my business?",
      answer:
        "Vehicle wraps are a cost-effective marketing tool that turns your vehicles into mobile advertisements, increasing brand visibility wherever they go. They are customizable and can be easily updated.",
    },
  ];

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div className="content px-xl-5">
              <h3>
                <span>Frequently Asked </span>
                <strong>Questions</strong>
              </h3>
              <p>
                Get answers to common questions about our signage solutions,
                processes, and services.
              </p>
            </div>
          </div>
          <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-container">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  index={index + 1}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
