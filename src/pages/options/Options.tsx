import React, { FunctionComponent } from "react";
import "@pages/options/Options.css";
type OptionsProps = {
  children?: React.ReactNode;
};
const Options: FunctionComponent<OptionsProps> = (props) => {
  // const Options: React.FC = () => {
  return <div className="container text-lime-400">Options</div>;
};

export default Options;
