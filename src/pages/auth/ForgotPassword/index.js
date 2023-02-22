import { Button, Form } from "antd";
import { MESSAGE_ICON } from "assets";
import { CustomInput } from "global/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificationInput from "react-verification-input";
import "./styles.scss";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  const handleContinue = () => {
    isEmailSent === false
      ? setIsEmailSent(true)
      : handleNavigation("/auth/reset-password");
  };

  const codeVerification = (
    <>
      <p className="line-height-25">
        Please enter code sent to your email{" "}
        <mark className="cursor-pointer primary-text-lighten-10 ">
          test@gmail.com
        </mark>{" "}
        to verify the account details
      </p>
      <VerificationInput
        placeholder="_"
        classNames={{
          container: "v-container",
          character: "v-character",
          characterInactive: "character--inactive",
          characterSelected: "character--selected",
        }}
      />
      <Button
        block
        type="primary"
        className="custom-btn"
        onClick={handleNavigation("/auth/reset-password")}
      >
        Continue
      </Button>

      <p className="text-center">
        Did not Receive a email?{" "}
        <mark className="cursor-pointer primary-text-color ">Resend</mark>
      </p>
    </>
  );

  const emailView = (
    <>
      <p className="line-height-25">
        Please enter your email and we will send you a code to reset your
        password
      </p>

      <Form>
        <CustomInput
          label="Email"
          icon={MESSAGE_ICON}
          placeholder={"example@gmail.com"}
        />

        <Button
          block
          type="primary"
          className="custom-btn"
          style={{ marginTop: 30 }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Form>
    </>
  );

  return (
    <div className="forgot-password-wrapper">
      {isEmailSent ? codeVerification : emailView}

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

export default ForgotPassword;
