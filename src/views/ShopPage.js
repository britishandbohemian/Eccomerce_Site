import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import Sidebar from "../components/Sidebar";
import ProductArea from "../components/ProductArea";
import "../assets/shop/css/style.css";
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

const ShopPage = () => {
  return (
    <div className="js">
      <Breadcrumbs />
      <section className="product-area shop-sidebar shop section">
        <div className="container">
          <div className="row">
            <Sidebar />
            <ProductArea />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
