import React from "react";
import Form from "react-bootstrap/Form";

function SelectQuantity() {
  return (
    <div style={{ width: "4rem", marginTop: "1rem" }}>
      <Form.Select aria-label="Select Quantity" id="Quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </Form.Select>
    </div>
  );
}

export default SelectQuantity;
