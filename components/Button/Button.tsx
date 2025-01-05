import { type } from "os";
import React from "react";
import Style from "./Button.module.css";

type ButtonProps = {
  btnText: string;
  handleClick: () => void;
};

const Button = ({ btnText, handleClick }: ButtonProps) => {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={handleClick}>{btnText}</button>
    </div>
  );
};

export default Button;
