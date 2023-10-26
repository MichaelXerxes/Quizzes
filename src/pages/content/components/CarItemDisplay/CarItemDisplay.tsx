import React, { ReactElement, useEffect, useRef } from "react";
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
  isSold = false,
}: Props): ReactElement => {
  const priceRangeRef = useRef(null);
  const carTypeRef = useRef(null);
  const dynamicContainer = {
    height: oryginalSize ? "104.87px;" : "auto",
  };
  function adjustFontSize(element) {
    let minFontSize = 4;
    let maxFontSize = parseFloat(
      window.getComputedStyle(element, null).getPropertyValue("font-size")
    );
    let fontSize = maxFontSize;

    while (maxFontSize - minFontSize > 0.3) {
      fontSize = (maxFontSize + minFontSize) / 2;
      element.style.fontSize = fontSize + "px";

      if (element.scrollWidth > element.offsetWidth) {
        maxFontSize = fontSize;
      } else {
        minFontSize = fontSize;
      }
    }
  }

  useEffect(() => {
    if (priceRangeRef.current) {
      adjustFontSize(priceRangeRef.current);
    }
    if (carTypeRef.current) {
      adjustFontSize(carTypeRef.current);
    }
  }, [priceRange, carType]);
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
        <div
          className="carItemDisplay-car-type"
          //ref={carTypeRef}
        >
          {carType}
        </div>
        <div className="carItemDisplay-price-range" ref={priceRangeRef}>
          {priceRange}
        </div>
      </div>
    </div>
  );
};

export default CarItemDisplay;
