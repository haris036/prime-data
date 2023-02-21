import { usePageTop } from "hooks";
import { useLocation, useNavigate } from "react-router-dom";

const usePageNavbar = () => {
  const navigate = useNavigate();
  const isPageTop = usePageTop();
  const hash = useLocation().hash;

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleNavigation = (to) => {
    navigate(to);
  };
  return { isPageTop, handleLogoClick, handleNavigation, hash };
};

export default usePageNavbar;
