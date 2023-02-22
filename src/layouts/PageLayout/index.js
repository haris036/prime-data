import { PageNavbar } from "global/components";
import { useScrollToTop } from "hooks";
import { Outlet } from "react-router-dom";
import PageFooter from "./Footer";

const PageLayout = () => {
  // useScrollToTop();
  return (
    <div className="page-layout-wrapper">
      <PageNavbar />
      <main className="page-inner">
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default PageLayout;
