import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 80px;
  height: 40px;
  border: 1px solid var(--light_grey);
  border-radius: 5px;
  font-size: var(--input_font_size);
  font-weight: 700;
  ::placeholder {
    color: var(--light_grey);
    font-weight: 800;
    font-size: var(--input_font_size);
  }
`;

const StyledLable = styled.label`
  text-transform: uppercase;
`;

const Inputs = () => {
  return (
    <div className="input_field">
      <StyledLable>Day</StyledLable>
      <StyledInput placeholder="DD"></StyledInput>
    </div>
  );
};

export default Inputs;
