import { FC, useRef, useEffect } from "react";
import "./TabsCarItem.css";

interface Props {
  carImage: string;
  carType: string;
  carPriceRange: string;
  isSold?: boolean;
}

const TabsCarItem: FC<Props> = ({
  carImage,
  carType,
  carPriceRange,
  isSold = false,
}): JSX.Element => {
  const carTypeRef = useRef<HTMLDivElement>(null);

  function adjustFontSize(element) {
    let minFontSize = 7;
    let maxFontSize = 14;
    let fontSize = maxFontSize;

    while (maxFontSize - minFontSize > 1) {
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
    if (carTypeRef.current) {
      adjustFontSize(carTypeRef.current);
    }
  }, [carType]);

  return (
    <div className="tabsCarItem-container">
      <div className="tabsCarItem-div-img">
        {isSold ? (
          <div className="tabsCarItem-issold-div">
            <div className="tabsCarItem-issold-text">Sold</div>
          </div>
        ) : (
          <div />
        )}
        <img
          src={carImage}
          alt="carImage"
          className="tabsCarItem-carimg"
          onDragStart={(e) => e.preventDefault()}
          onClick={(e) => e.preventDefault()}
        />
      </div>
      <div className="tabsCarItem-display-div">
        <div className="tabsCarItem-carType" ref={carTypeRef}>
          {carType}
        </div>
        <div className="tabsCarItem-priceRange">Estimate: {carPriceRange}</div>
      </div>
    </div>
  );
};

export default TabsCarItem;
