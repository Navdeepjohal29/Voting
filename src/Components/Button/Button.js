import React from "react";
import "./Button.scss";
import { Link } from "react-router-dom";

const Button = ({ className, onClick, text }) => {
  return (
    <button component={Link} className={`buttonStyle ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
