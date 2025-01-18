import React from 'react'
import { useContext, useState } from "react"
import { FlightContext } from "../context/FlightContext"
import { useNavigate, } from "react-router-dom"
import { Button } from 'react-bootstrap'

const SignUp = () => {
  const [name, setName] = useState("")
  const [nameError, setNameError] = useState("")
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")
  const [phone, setPhone] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const { userdata, setUserdata } = useContext(FlightContext);
  const [message, setMessage] = useState("");


  const EyeIcon = () => {
    setShowPassword(!showPassword)
  }
  const findUserByEmail = (email) => {
    for (let i = 0; i < userdata.length; i++) {
      const user = userdata[i];
      if (user.email === email) {
        return true;
      }
    }
  };
  const handleSignUp = () => {
    let isValid = (true)
    if (!name) {
      isValid = false
      setNameError("Name is required")
    }
    if (!email) {
      isValid = false
      setPhoneError("Email is required")
    }
    if (!phone) {
      isValid = false
      setPhoneError("Phone is required")
    }
    if (!password) {
      isValid = false
      setPasswordError("Password is required")
    }
    if (isValid) {
      let newUserEmail = findUserByEmail(email);
      if (newUserEmail) {
        setMessage("A User with this Email id already Signed Up");
      } else {
        setUserdata((currentUserData) => {
          let newuser = {};
          newuser.id = currentUserData.length + 1;
          newuser.name = name;
          newuser.email = email;
          newuser.phone = phone;
          newuser.password = password;

          currentUserData.push(newuser);
          goTo("/login-page");
          return currentUserData;
        });
        clearRegisterForm();
      }
    }
    var obj={name,email,phone,password}
    console.log("Signup sucessfully",{obj});
    
  }
  const clearRegisterForm = () => {
    setName("");
    setPhone("");
    setPassword("");
    setMessage("");
  };
  const navigate = useNavigate()
  function goToLogin() {
    goTo("/login-page")
  }
  function goTo(path) {
    navigate(path)
  }
  return (
    <div className="Container">
      <div className="form">
        <h1><u> SignUp-Page </u></h1>
        <div className="form-group">
          <input type="text" placeholder="Enter Your Name" onChange={(event) => {
            setName(event.target.value)
            setNameError("")
          }} value={name}
          />
          <div className="name-error">{nameError}</div>

        </div><br />
        <div className="form-group">
          <input type="email" placeholder="Enter Your Email" onChange={(event) => {
            setEmail(event.target.value)
            setEmailError("")
            setMessage("");
          }} value={email}
          />
          <div className="phone-error">{emailError}</div>

        </div><br />

        <div className="form-group">
          <input type="text" placeholder="Enter Your Phone" onChange={(event) => {
            setPhone(event.target.value)
            setPhoneError("")
            setMessage("");
          }} value={phone}
          />
          <div className="phone-error">{phoneError}</div>

        </div><br />
        <div className="form-group">
          <input type={showPassword ? "password" : "password"} placeholder="Enter Your Password" onChange={(event) => {
            setPassword(event.target.value)
            setPasswordError("")
          }} value={password}
          />
          <button className="icon" onClick={EyeIcon}>
            {showPassword}
          </button>
          <div className="password-error">{passwordError}</div>
          <div>{message}</div>

        </div><br />
        <Button onClick={handleSignUp}>Signup</Button>
        <div className="press"><u>or</u></div>

        <Button className="btn btn-primary" onClick={(e) => { goToLogin(e) }}>Login</Button>
      </div>
    </div>
  )
}

export default SignUp









