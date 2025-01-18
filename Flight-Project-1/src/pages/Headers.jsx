//import { useNavigate } from "react-router-dom";
import Navbar from '../navbar/Navbar';


function Headers() {

  // const navigate = useNavigate()
  // function gotoSignUp() {
  //   goTo("/signup-page");
  // }
  // function goToLogin() {
  //   goTo("/login-page");
  // }
  // function goTo(path) {
  //   navigate(path)

  // }
  return (
    <div>
      <Navbar />
      <h1 className="mt-5">Welcome to Flight Ticket Booking!</h1>
      {/* <button onClick={gotoSignUp}>SignUp</button>or
      <button onClick={goToLogin}>Login</button> */}
    </div>
  )
}
export default Headers