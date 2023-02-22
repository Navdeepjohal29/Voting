import React from "react";
import Form from "react-bootstrap/Form";
import "./Checkbox.scss";
const Checkbox = (props) => {
  return (
    <>
      {["checkbox"].map((type) => (
        <div key={type}>
          <Form.Check type={type} id={`check-api-${type}`}>
            <Form.Check.Input
              type={type}
              name={props.name}
              onChange={props.onChange}
              checked={props.checked}
            />
          </Form.Check>
        </div>
      ))}
    </>
  );
};

export default Checkbox;
