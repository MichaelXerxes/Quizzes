import React, { ReactElement, useState } from "react";
import "./CarItemDisplay.css";
interface Props {
  carType: string;
  priceRange: string;
  carImage: string;
  oryginalSize?: boolean;
  isSold?: boolean;
}

const CarItemDisplay = ({
  carType,
  priceRange,
  carImage,
  oryginalSize = true,
  isSold = true,
}: Props): ReactElement => {
  const dynamicContainer = {
    height: oryginalSize ? "104.87px;" : "auto",
  };
  return (
    <div className="carItemDisplay-container" style={dynamicContainer}>
      {isSold ? (
        <div className="carItemDisplay-issold-div">
          <div className="carItemDisplay-issold-text">Sold</div>
        </div>
      ) : (
        <div />
      )}
      <img src={carImage} className="carItemDisplay-image" alt={carType} />
      <div className="carItemDisplay-info-div">
        <div className="carItemDisplay-car-type">{carType}</div>
        <div className="carItemDisplay-price-raneg">{priceRange}</div>
      </div>
    </div>
  );
};

export default CarItemDisplay;
