import React from "react";

import TourCard from "../tour-card/tour-card";

import TOUR_DATA from "./tour-data";

import "./tours-preview.scss";

const ToursPreview = () => {
  return (
    <div>
      <h1 className="tours-heading">All Tours</h1>
      <div className="tours-preview">
        {TOUR_DATA.map(
          ({ name, price, locations, duration, coverPhoto }, index) => (
            <TourCard
              name={name}
              key={index}
              price={price}
              locations={locations}
              duration={duration}
              coverPhoto={coverPhoto}
            />
          )
        )}
      </div>
    </div>
  );
};
export default ToursPreview;
