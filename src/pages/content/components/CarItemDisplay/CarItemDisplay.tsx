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
  const dynamicContainer = {
    height: oryginalSize ? "104.87px;" : "auto",
  };
  function adjustFontSize(element) {
    let fontSize = parseFloat(
      window.getComputedStyle(element, null).getPropertyValue("font-size")
    );

    while (element.scrollWidth > element.offsetWidth && fontSize > 0) {
      fontSize -= 0.5;
      element.style.fontSize = fontSize + "px";
    }
  }
  useEffect(() => {
    if (priceRangeRef.current) {
      adjustFontSize(priceRangeRef.current);
    }
  }, [priceRange]);
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
        <div className="carItemDisplay-price-range" ref={priceRangeRef}>
          {priceRange}
        </div>
      </div>
    </div>
  );
};

export default CarItemDisplay;
