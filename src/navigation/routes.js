import { AuthLayout, PageLayout } from "layouts";
import { Home } from "pages/app";
import { Login, Register, ForgotPassword, ResetPassword } from "pages/auth";
import { createBrowserRouter } from "react-router-dom";

const getRoutes = () =>
  createBrowserRouter([
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
      ],
    },
    {
      path: "",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ]);

export default getRoutes;
