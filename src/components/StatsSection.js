import statsBg from "../assets/img/Installing.png"; // Ensure the path to the image is correct
import React, { useState, useEffect } from "react";

const StatsItem = ({ start, end, duration, children }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    // Calculate the total duration in milliseconds
    const totalDuration = duration * 1000;
    const stepTime = totalDuration / (end - start);
    let currentCount = start;

    const timer = setInterval(() => {
      currentCount++;
      if (currentCount >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, stepTime);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [start, end, duration]);

  return (
    <div className="stats-item text-center w-100 h-100">
      <span className="purecounter">{count}</span>
      <p>{children}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section id="stats" className="stats">
      <img src={statsBg} alt="" data-aos="fade-in" />
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <StatsItem start="0" end="232" duration="1">
              Clients
            </StatsItem>
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsItem start="0" end="521" duration="1">
              Projects
            </StatsItem>
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsItem start="0" end="1453" duration="1">
              Hours Of Support
            </StatsItem>
          </div>
          <div className="col-lg-3 col-md-6">
            <StatsItem start="0" end="32" duration="1">
              Workers
            </StatsItem>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
