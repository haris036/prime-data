import { CheckCircleFilled } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PersonalDetails, VerifyEmail, VerifyPassword } from "./components";

const useRegister = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  const handleNextStep = () => {
    if (activeStep === 2) {
      handleNavigation("/")();
    }
    setActiveStep(activeStep + 1);
  };

  const getDotClassName = (dotIndex) =>
    `dot ${dotIndex <= activeStep ? "active" : ""}`;

  const stepComponents = [
    {
      icon:
        activeStep > 0 ? (
          <CheckCircleFilled style={{ fontSize: 30 }} />
        ) : (
          <div className={getDotClassName(0)} />
        ),
      content: <VerifyEmail onNextStep={handleNextStep} />,
    },
    {
      icon:
        activeStep > 1 ? (
          <CheckCircleFilled style={{ fontSize: 30 }} />
        ) : (
          <div className={getDotClassName(1)} />
        ),
      content: <VerifyPassword onNextStep={handleNextStep} />,
    },
    {
      icon:
        activeStep > 2 ? (
          <CheckCircleFilled style={{ fontSize: 30 }} />
        ) : (
          <div className={getDotClassName(2)} />
        ),
      content: <PersonalDetails onNextStep={handleNextStep} />,
    },
  ];

  return { handleNavigation, stepComponents, activeStep };
};

export default useRegister;
