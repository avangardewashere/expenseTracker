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
  },
];

export default routes;
 
