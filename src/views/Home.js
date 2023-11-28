import React, { Profiler } from "react";
import AboutSection from "../components/AboutSection";
import TableList from "../components/Tables";
import StatsSection from "../components/StatsSection";
import HeroSection from "../components/Hero";
import ServicesSection from "../components/Services";
import FeaturesSection from "../components/FeaturesSection";
import PortfolioSection from "../components/Portfolio";
import FaqSection from "../components/FaqSection";
import CallToAction from "../components/CallToAction";
import TestimonialsSection from "../components/TestimonialsSection";
import NewsSection from "../components/NewsSection";
import ContactSection from "../components/ContactUs";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main id="main">
      {/* Hero Section */}
      <HeroSection />
      {/* List Of People We Worked With */}
      {/* Data Gotten From Api */}
      {/* <TableList /> */}

      {/* People We have worked With */}
      <section id="clients" className="clients">
        <div className="container-fluid" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-1.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-2.png"
                class="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-3.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-4.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-5.png"
                class="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="/assets/img/clients/client-6.png"
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}

      <AboutSection />

      {/* Stats Counter Section */}
      <StatsSection />
      {/* Services Section */}
      <ServicesSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Portfolio Section */}
      <PortfolioSection />
      {/* Faq Section */}
      <FaqSection />
      {/* Call To action */}
      <CallToAction />
      {/* Testimonials */}
      <TestimonialsSection />

      {/* Blog Posts */}
      <NewsSection />

      {/* Contact us */}
      <ContactSection />

      <Footer />
    </main>
  );
};

export default Home;
