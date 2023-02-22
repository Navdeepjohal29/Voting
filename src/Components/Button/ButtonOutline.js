import React from "react";
import "./Button.scss";

const ButtonOutline = ({ className, onClick, text }) => {
  return (
    <button className={`btnOutlineStyle ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonOutline;
