import { useEffect, useState } from "react";
const { useLocation } = require("react-router-dom");

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);
};

function usePageTop() {
  const [isPageTop, setIsPageTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const isPageTop = window.scrollY < 50;
      setIsPageTop(isPageTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isPageTop;
}

export { useScrollToTop, usePageTop };
