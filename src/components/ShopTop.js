import React, { useState } from "react";

const ShopTopBar = () => {
  const [showCount, setShowCount] = useState("09");
  const [sortBy, setSortBy] = useState("Name");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const handleShowCountChange = (event) => {
    setShowCount(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div className="shop-top">
      <div className="shop-shorter">
        <div className="single-shorter">
          <label>Show :</label>
          <select value={showCount} onChange={handleShowCountChange}>
            <option value="09">09</option>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="30">30</option>
          </select>
        </div>
        <div className="single-shorter">
          <label>Sort By :</label>
          <select value={sortBy} onChange={handleSortByChange}>
            <option value="Name">Name</option>
            <option value="Price">Price</option>
            <option value="Size">Size</option>
          </select>
        </div>
      </div>
      <ul className="view-mode">
        <li className={viewMode === "grid" ? "active" : ""}>
          <button onClick={() => handleViewModeChange("grid")}>
            <i className="fa fa-th-large"></i>
          </button>
        </li>
        <li className={viewMode === "list" ? "active" : ""}>
          <button onClick={() => handleViewModeChange("list")}>
            <i className="fa fa-th-list"></i>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ShopTopBar;
