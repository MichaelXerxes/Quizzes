import { FC } from "react";
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
        <div className="tabsCarItem-carType">{carType}</div>
        <div className="tabsCarItem-priceRange">{carPriceRange}</div>
      </div>
    </div>
  );
};

export default TabsCarItem;
