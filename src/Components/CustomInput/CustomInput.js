import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import "./CustomInput.scss";

const CustomInput = (props) => {

  return (
    <InputGroup className="customInput_group">
      <FormControl placeholder="Amount" value={props.amount} onChange={(e) => props.onAmountChnage(e.target.value)} type="number" />
      <InputGroup.Text onClick={(e) => props.onAmountChnage(props.max)}>Max</InputGroup.Text>
    </InputGroup>
  );
};

export default CustomInput;
