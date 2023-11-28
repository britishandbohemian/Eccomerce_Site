import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS

import Navbar from "./components/Navbar";
import Home from "./views/Home"; // Assuming you have a Home component
import ShopPage from "./views/ShopPage"; // Your ShopPage component
import ServicePage from "./views/ServicesPage"; // Your ShopPage component

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/services" element={<ServicePage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
