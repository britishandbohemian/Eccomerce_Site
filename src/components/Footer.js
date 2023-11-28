import React from "react";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Signage Categories</h4>
            <ul>
              <li>
                <a href="#">Building Signage</a>
              </li>
              <li>
                <a href="#">Promotional Displays</a>
              </li>
              <li>
                <a href="#">Reception and Office Signage</a>
              </li>
              <li>
                <a href="#">Indoor Retail Signs</a>
              </li>
              <li>
                <a href="#">Business Signs</a>
              </li>
              <li>
                <a href="#">Banners & Flags</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Signs4sa company profile</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Signage News</a>
              </li>
              <li>
                <a href="#">Africa Signage</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Popular Links</h4>
            <ul>
              <li>
                <a href="#">Safety Signs</a>
              </li>
              <li>
                <a href="#">Lightbox Signs</a>
              </li>
              <li>
                <a href="#">Billboard Signage</a>
              </li>
              <li>
                <a href="#">Vinyl Banners</a>
              </li>
              <li>
                <a href="#">LED Signage</a>
              </li>
              <li>
                <a href="#">Backlit Lettering</a>
              </li>
              <li>
                <a href="#">Covid-19</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>99 Tsessebe Crescent, Randjespark</p>
            <p>Corporate Park South</p>
            <p>Midrand, 1685</p>
            <p className="mt-4">
              <strong>Phone:</strong>{" "}
              <span>+1 010 746 3547 | 071 871 5123</span>
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <span>
                <a href="mailto:info@yourdomain.com">info@yourdomain.com</a>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          &copy; <span>Copyright</span>{" "}
          <strong className="px-1">Signs4sa</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Kamo@4sa.co.za</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
