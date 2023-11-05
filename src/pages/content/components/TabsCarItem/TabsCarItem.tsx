import { FC } from "react";
import "./TabsCarItem.css";
interface Props {
  carImage: string;
  carType: string;
  carPriceRange: string;
}

const TabsCarItem: FC<Props> = ({
  carImage,
  carType,
  carPriceRange,
}): JSX.Element => {
  return (
    <div className="tabsCarItem-container">
      <div>
        <img
          src={carImage}
          alt="carImage"
          className="tabsCarItem-carimg"
          onDragStart={(e) => e.preventDefault()}
          onClick={(e) => e.preventDefault()}
        />
      </div>
      <div className="tabsCarItem-display-div">
        <div className="tabsCarItem-carType">{carType}</div>
        <div className="tabsCarItem-priceRange">{carPriceRange}</div>
      </div>
    </div>
  );
};

export default TabsCarItem;
