import { Steps } from "antd";
import "./styles.scss";
import useRegister from "./useRegister";

const Register = () => {
  const { handleNavigation, activeStep, stepComponents } = useRegister();

  return (
    <div className="register-form-wrapper">
      <Steps
        current={activeStep}
        items={stepComponents}
        className="auth-steps"
        responsive={false}
      />

      {stepComponents[activeStep].content}

      <p className="text-center register-text">
        Already have an account ?{" "}
        <mark
          className="primary-text-lighten-10 font-bold cursor-pointer"
          onClick={handleNavigation("/auth/login")}
        >
          Login
        </mark>
      </p>
    </div>
  );
};

export default Register;
