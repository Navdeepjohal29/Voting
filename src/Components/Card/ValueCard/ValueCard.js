import React from "react";
import {Col} from "react-bootstrap";
import "./ValueCard.scss";

const ValueCard = ({ title, subtitle }) => {
  return (
    <Col className="value_Card">
      <h4 className="subHeading">{title}</h4>
      <h2 className="heading">{subtitle}</h2>
    </Col>
  );
};

export default ValueCard;