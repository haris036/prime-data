import { Col, Row, Grid } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import AuthLeftSide from "./components/AuthLeftSide";

const { useBreakpoint } = Grid;

const AuthLayout = () => {
  const screens = useBreakpoint();
  const activePath = useLocation().pathname;

  const greetingText = {
    "/auth/login": "Welcome to",
    "/auth/register": "Signup to",
  };

  return (
    <div className={`auth-layout-wrapper ${screens.xs ? "xs" : ""}`}>
      <div className="auth-inner">
        <Row className="h-100">
          {screens.md && (
            <Col xs={12}>
              <AuthLeftSide />
            </Col>
          )}
          <Col xs={24} md={12}>
            <div className="auth-form-wrapper">
              <h3 className="m-0">{greetingText[activePath]}</h3>
              <h1 className="primary-text-color">ePrimeData</h1>
              <Outlet />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthLayout;
