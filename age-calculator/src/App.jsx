import styled from "styled-components";
import "./App.css";
import Form from "./components/Form";

const StyledApp = styled.div`
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-items: center;
  background-color: var(--off_white)
`;

function App() {
  return (
    <StyledApp>
      <Form />
    </StyledApp>
  );
}

export default App;
