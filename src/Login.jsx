/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "./App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function isValidEmail(email) {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  }

  function isValidPassword(password) {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  }

  const checkEmailCondition = (value) => {
    if (value === "") {
      setEmailError("Email Required");
    } else if (!isValidEmail(value)) {
      setEmailError("Invalid Email");
    } else {
      setEmailError("");
    }
  };

  const checkPasswordCondition = (value) => {
    if (value === "") {
      setPasswordError("Password Required");
    } else if (!isValidPassword(value)) {
      setPasswordError("Invalid Password");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    checkEmailCondition(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordCondition(value);
  };

  const handleSubmit = () => {
    checkEmailCondition(email);
    checkPasswordCondition(password);

    if (emailError === "" && passwordError === "") {
      return true;
    }
    return false;
  };

  const submitFun = () => {
    const storedUsers = JSON.parse(localStorage.getItem("formFields")) || [];

    if (handleSubmit()) {
      const user = storedUsers.find(
        (user) => user.email === email && user.password === password
      );
      //console.log("user", user);
      if (user) {
        console.log(user.isAdmin);
        if (!user.isAdmin) {
          setError("");
          user.isLogin = true;
          localStorage.setItem("formFields", JSON.stringify(storedUsers));

          navigate("/");
        } else {
          setError("");
          user.isLogin = true;
          localStorage.setItem("formFields", JSON.stringify(storedUsers));

          navigate("/");
        }
      } else {
        setError("Invalid Data");
      }
    }
  };

  return (
    <div
      style={{
        height: "400px",
        width: "350px",
        paddingTop: "10px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      }}
    >
      <h1>
        Log<span style={{ color: "aqua" }}>in</span>
      </h1>
      <div style={{ margin: "10px" }}>
        <label>Email:</label>
        <input
          type="email"
          required
          style={{ height: "30px", width: "300px" }}
          onChange={handleEmailChange}
          onBlur={() => checkEmailCondition(email)}
          value={email}
        />
        <span style={{ color: "red" }}>{emailError}</span>
      </div>
      <div style={{ margin: "10px" }}>
        <label>Password:</label>
        <input
          type="password"
          required
          style={{ height: "30px", width: "300px" }}
          onChange={handlePasswordChange}
          onBlur={() => checkPasswordCondition(password)}
          value={password}
        />
        <span style={{ color: "red" }}>{passwordError}</span>
      </div>
      <div>
        <button onClick={submitFun} style={{ backgroundColor: "aqua" }}>
          Login
        </button>
      </div>
      <div style={{ marginTop: "10px" }}>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

export default Login;
