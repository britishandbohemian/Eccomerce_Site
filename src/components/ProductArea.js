import React from "react";
import ShopTopBar from "./ShopTop";

const ProductArea = () => {
  return (
    <div className="col-lg-9 col-md-8 col-12">
      {/* Shop Top */}
      <ShopTopBar />

      {/* Product Grid */}
      <div className="row">
        {/* Here you can map through products and render each product */}
      </div>
    </div>
  );
};

export default ProductArea;
