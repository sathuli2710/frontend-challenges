import React from "react";
import styled from "styled-components";
import Inputs from "./Inputs";

const StyledSection = styled.section`
  width: 600px;
  height: 500px;
  background-color: var(--white);
  border-radius: 20px 20px 180px 20px;
  padding: 30px;
`;

const Form = () => {
  return (
    <StyledSection>
      <Inputs />
    </StyledSection>
  );
};

export default Form;
