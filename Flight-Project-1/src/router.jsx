import { createBrowserRouter } from "react-router-dom";
import Headers from "./pages/Headers"
import Home from "./pages/Home"
import SearchFlight from "./pages/SearchFlight"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import FlightList from "./pages/FlightList"
import FlightTicketDetails from "./pages/FlightTicketDetails"
import FlightAllHistory from "./pages/FlightAllHistory"

const routes = [
  {
    path: "/",
    element: <Headers />
  },
  {
    path: "/signup-page",
    element: <  SignUp />
  },
  {
    path: "/login-page",
    element: < Login />
  },
  {
    path: "/home-page",
    element: < Home />
  },
  {
    path: "/flightlist-page",
    element: < FlightList />
  },
  {
    path: "/searchflight-page",
    element: <  SearchFlight />
  },
  {
    path: "/flightticketdetails-page",
    element: < FlightTicketDetails />
  },
  {
    path: "/flightallhistory-page",
    element: < FlightAllHistory />
  },
]
const router = createBrowserRouter(routes);



export default router;
