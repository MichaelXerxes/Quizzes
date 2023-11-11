import { FC } from "react";
import SpeyScoreLogo from "../../../../../public/spey/LogoSpeyScore.svg";
const Footer: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: 0,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        borderTop: 1,
        borderTopColor: "#EEF0F6",

        borderTopStyle: "solid",
        paddingTop: 20,
        paddingBottom: 20,
      }}
    >
      <div
        style={{
          marginRight: "10px",
          color: " rgba(3, 14, 49, 0.54)",
          fontSize: 14,
          fontWeight: 400,
          userSelect: "none",
          fontFamily: "Satoshi",
          letterSpacing: "-1.1%",
        }}
      >
        Powered by
      </div>
      <img
        src={SpeyScoreLogo}
        alt="logo"
        style={{
          width: 128,
          height: 22,
          userSelect: "none",
          // color: "black",
          // backgroundColor: "black",
        }}
        onDragStart={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      />
    </div>
  );
};

export default Footer;
