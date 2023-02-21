import { Button, Grid } from "antd";

// import { NavLink } from "react-router-dom";
import data from "./data.json";
import usePageNavbar from "./usePageNavbar";
const { useBreakpoint } = Grid;

const PageNavbar = () => {
  const screens = useBreakpoint();
  const { isPageTop, handleLogoClick, handleNavigation, hash } =
    usePageNavbar();

  return (
    <nav className={`page-navbar  ${isPageTop ? "page_top" : ""}`}>
      <div className={"navbar_wrapper"}>
        <div className={"app-logo"} onClick={handleLogoClick}></div>
        {screens.md && (
          <div className={`navlinks_wrapper`}>
            {data.menuItems.map(({ id, title, href }) => (
              <a
                key={id}
                className={hash === href || hash + "#" === href ? "active" : ""}
                href={href}
              >
                {title}
              </a>
            ))}
          </div>
        )}
        <div className="navbar-right">
          <Button
            type="primary"
            className="font-bold btn-shadow"
            size="large"
            onClick={() => handleNavigation("/auth/login")}
          >
            Login
          </Button>
          <Button
            type="primary"
            className="font-bold btn-shadow btn-orange"
            size="large"
            onClick={() => handleNavigation("/auth/register")}
          >
            Signup
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default PageNavbar;
