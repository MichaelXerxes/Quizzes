import { ReactElement } from "react";
import speyLogo from "../../../../assets/icons/speyLogo.svg";
import x from "../../../../assets/icons/x.svg";
import "@pages/content/components/TopBarSpey/TopBarSpey.css";
interface Props {
  onClose: () => void;
}

const TopBarSpey = ({ onClose }: Props): ReactElement => {
  return (
    <div className="topbarspey-container">
      <div className="topbarspey-container-inner">
        <div className="topbarspey-logo-div">
          <img
            src={speyLogo}
            className="topbarspey-logo"
            alt="logo"
            onDragStart={(e) => e.preventDefault()}
            onClick={(e) => e.preventDefault()}
          />
          <div className="topbarspey-text">Spey</div>
        </div>
        <button onClick={onClose}>
          <img src={x} className="topbarspey-back" alt="x" />
        </button>
      </div>
    </div>
  );
};

export default TopBarSpey;
