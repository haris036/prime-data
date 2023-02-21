import { RouterProvider } from "react-router-dom";
import getRoutes from "./routes";

const RouterConfig = () => <RouterProvider router={getRoutes()} />;

export default RouterConfig;
