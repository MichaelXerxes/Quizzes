import React, { ReactElement, useState } from "react";
import "./HorizontalScrollableList.css";
import CarItemDisplay from "../CarItemDisplay/CarItemDisplay";
import vectorLeft from "../../../../assets/icons/VectorLeft.svg";
import vectorRight from "../../../../assets/icons/VectorRight.svg";
interface Props {
  itemsData: any;
}

const HorizontalScrollableList = ({ itemsData }: Props): ReactElement => {
  const scrollContainerRef = React.useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const SCROLL_AMOUNT = 100;
  const handleLeftClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const handleRightClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += SCROLL_AMOUNT;
    }
  };
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = x - startX;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div className="horizontalScrollableList-container">
      <div className="horizontalScrollableList-toprow">
        <div className="horizontalScrollableList-toptext">Similar items</div>
        <div className="horizontalScrollableList-vectors-div">
          <div
            className="horizontalScrollableList-onevector-div"
            onClick={handleLeftClick}
          >
            <img
              src={vectorLeft}
              alt="vectorLeft"
              className="horizontalScrollableList-vector"
            />
          </div>
          <div
            className="horizontalScrollableList-onevector-div"
            onClick={handleRightClick}
          >
            <img
              src={vectorRight}
              alt="vectorRight"
              className="horizontalScrollableList-vector"
            />
          </div>
        </div>
      </div>
      <div
        className="horizontalScrollableList-scroll"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {itemsData.map((car, index) => (
          <CarItemDisplay
            key={index}
            carType={car.carType}
            priceRange={car.priceRange}
            carImage={car.carImage}
            isSold={car.isSold}
          />
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollableList;
