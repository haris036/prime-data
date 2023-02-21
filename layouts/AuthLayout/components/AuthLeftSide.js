import { AUTH_ILLUSTRATION } from "assets";
import { useNavigate } from "react-router-dom";

const AuthLeftSide = () => {
  const navigate = useNavigate();
  return (
    <div className="auth-left-side">
      <div className="app-logo" onClick={() => navigate("/")} />
      <div className="auth-left-side-inner">
        <img src={AUTH_ILLUSTRATION} alt="" />
        <h1 className="primary-text-color m-0">Etsy Listing Data</h1>
        <p className="text-center line-height-25">
          ePrimeData empowers brands with ready-to-use and fully customizable
          KPIs and dashboards that go way beyond traditional reporting, while
          simplifying data management and workflows.
        </p>
      </div>
    </div>
  );
};

export default AuthLeftSide;
