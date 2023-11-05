import { FC } from "react";
import "./TopBarSpeyImage.css";
import imageCarImg from "../../../../assets/img/imageCar.svg";
import heart from "../../../../assets/icons/heart.svg";
import X from "../../../../assets/icons/x.svg";
import speyWhite from "../../../../assets/icons/speyWhite.svg";
interface Props {
  imageCar?: string;
  carType?: string;
}
const defaultCarType =
  "1902 Panhard et Levassor Type A2 7hp Twin-Cylinder Rear-Entrance Tonneau";
const TopBarSpeyImage: FC<Props> = ({
  imageCar = imageCarImg,
  carType = defaultCarType,
}): JSX.Element => {
  return (
    <section>
      <div
        className="topBarSpeyImage-container"
        style={{ backgroundImage: `url(${imageCar})` }}
      >
        <div className="topBarSpeyImage-topbar">
          <div className="topBarSpeyImage-speyWhite-div">
            <img
              src={speyWhite}
              className="topBarSpeyImage-speyWhite-img"
              alt="imageBackground"
              onDragStart={(e) => e.preventDefault()}
              onClick={(e) => e.preventDefault()}
            />
            <div className="topBarSpeyImage-speyWhite-text">SpeyScore</div>
          </div>
          <div className="topBarSpeyImage-buttons-div">
            <div className="topBarSpeyImage-button">
              <img src={heart} className="topBarSpeyImage-button-img" />
            </div>
            <div className="topBarSpeyImage-button">
              <img src={X} className="topBarSpeyImage-button-img" />
            </div>
          </div>
        </div>
        <div className="topBarSpeyImage-cartype-text">{carType}</div>
      </div>
    </section>
  );
};

export default TopBarSpeyImage;
