import React from "react";

import "../assets/shop/css/bootstrap.css";
import "../assets/shop/css/magnific-popup.min.css";
import "../assets/shop/css/font-awesome.css";
import "../assets/shop/css/jquery.fancybox.min.css";
import "../assets/shop/css/themify-icons.css";
import "../assets/shop/css/niceselect.css";
import "../assets/shop/css/animate.css";
import "../assets/shop/css/flex-slider.min.css";
import "../assets/shop/css/slicknav.min.css";
import "../assets/shop/css/style.css";
import "../assets/shop/css/responsive.css";

const Sidebar = () => {
  return (
    <div className="col-lg-3 col-md-4 col-12">
      {/* Add further details and functionalities for each section as needed */}
      <div className="shop-sidebar">
        {/* Categories */}
        <div className="single-widget category">
          <h3 className="title">Categories</h3>
          <ul class="categor-list">
            <li>
              <a href="#">Indoor Signs</a>
            </li>
            <li>
              <a href="#">Outdoor Signs</a>
            </li>
            <li>
              <a href="#">Building Signs</a>
            </li>
            <li>
              <a href="#">Promotional Signs</a>
            </li>
            <li>
              <a href="#">trousers</a>
            </li>
            <li>
              <a href="#">kitwears</a>
            </li>
            <li>
              <a href="#">accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
