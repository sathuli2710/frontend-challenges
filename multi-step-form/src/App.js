import { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import SideBar from "./components/SideBar";

function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [isError, setError] = useState(false);
  const formDetails = {
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    planInfo: {
      isMonth: true,
      activePlan: 1,
    },
    addOns: [],
  };
  return (
    <div className="w-screen h-screen sm:h-[750px] bg-light-grey min-md:grid min-md:place-items-center">
      <Card className="flex sm:flex-col sm:justfy-center sm:items-center justify-start items-start gap-20 sm:hidden">
        <SideBar
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          formDetails={formDetails}
          setError={setError}
        />
        <Form
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          formDetails={formDetails}
          isError={isError}
          setError={setError}
        ></Form>
      </Card>
      <div className="min-md:hidden">
        <SideBar
          setActiveStep={setActiveStep}
          activeStep={activeStep}
          formDetails={formDetails}
          setError={setError}
        />
        <Card className="min-md:flex justify-start items-start gap-20 sm:absolute sm:top-[100px] sm:left-[20px]">
          <Form
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            formDetails={formDetails}
            isError={isError}
            setError={setError}
          ></Form>
        </Card>
      </div>
    </div>
  );
}

export default App;
