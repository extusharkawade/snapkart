import React from "react";
import Form from "react-bootstrap/Form";

function SelectQuantity(props) {
  return (
    <div style={{ width: "4rem", marginTop: "1rem" }}>
      <Form.Select
        aria-label="Select Quantity"
        id="Quantity"
        defaultValue={props.quantity}
        onChange={(e) => {
          props.setQuantity(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </div>
  );
}

export default SelectQuantity;
