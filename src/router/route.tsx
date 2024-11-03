import AuthenticationPage from "../pages/Authentication";
import Homepage from "../pages/Homepage";
import OnBoarding from "../pages/OnBoarding";

const routes = [
  {
    path: "/",
    element: <OnBoarding />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },  {
    path: "/auth",
    element: <AuthenticationPage />,
  },
];

export default routes;
 
