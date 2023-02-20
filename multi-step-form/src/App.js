import { useRef, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import SideBar from "./components/SideBar";

function App() {
  const [step, setStep] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const formDetails = useRef({
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
  });
  return (
    <div className="max-w-screen h-screen bg-light-grey grid place-items-center">
      <Card className="flex justify-start items-start gap-20">
        <SideBar
          setStep={setStep}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Form
          step={step}
          setStep={setStep}
          formDetails={formDetails}
          setActiveTab={setActiveTab}
        ></Form>
      </Card>
    </div>
  );
}

export default App;
