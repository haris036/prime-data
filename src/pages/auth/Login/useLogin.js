
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => () => {
    navigate(path);
  };

  return { handleNavigation };
};

export default useLogin;
