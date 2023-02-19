import { useEffect, useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import SideBar from "./components/SideBar";

function App() {
  const [step, setStep] = useState(1);
  // const stepDetails = [
  //   {
  //     stepNumber: 1,
  //     title: "Personal info",
  //     desc: "Please provide your name, email address, and phone number.",
  //   },
  //   {
  //     stepNumber: 2,
  //     title: "Select your plan",
  //     desc: "You have the option of monthly or yearly billing.",
  //   },
  //   {
  //     stepNumber: 3,
  //     title: "Pick add-ons",
  //     desc: "Add-ons help enhance your gaming experience.",
  //   },
  //   {
  //     stepNumber: 4,
  //     title: "Finishing up",
  //     desc: "Double-check everything looks OK before confirming.",
  //   },
  // ];
  // const stepRef = useRef(stepDetails[0]);
  // useEffect(() => {
  //   stepRef.current = stepDetails.find((item) => item.stepNumber === step);
  // }, [step]);

  return (
    <div className="max-w-screen h-screen bg-light-grey grid place-items-center">
      <Card className="flex justify-start items-start gap-20">
        <SideBar setStep={setStep} />
        <Form step={step}></Form>
      </Card>
    </div>
  );
}

export default App;
