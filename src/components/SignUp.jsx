// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function SignUp() {
//   // const [fName, setFName] = useState("");
//   // const [lName, setLName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   // const [confirmPassword, setConfirmPassword] = useState("");
//   // const [emailError, setEmailError] = useState("");
//   // const [passwordError, setPasswordError] = useState("");
//   // const [conPasswordError, setConPasswordError] = useState("");
//   // const [isAgreed, setIsAgreed] = useState(false);

//   // function isValidEmail(email) {
//   //   const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//   //   return regex.test(email);
//   // }

//   // function isValidPassword(password) {
//   //   const regex =
//   //     /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//   //   return regex.test(password);
//   // }

//   // function checkEmailCondition(value) {
//   //   if (value === "") {
//   //     setEmailError("Email Required");
//   //   } else if (!isValidEmail(value)) {
//   //     setEmailError("Invalid Email");
//   //   } else {
//   //     setEmailError("");
//   //   }
//   // }

//   // function checkPasswordCondition(value) {
//   //   if (value === "") {
//   //     setPasswordError("Password Required");
//   //   } else if (!isValidPassword(value)) {
//   //     setPasswordError("Invalid Password");
//   //   } else {
//   //     setPasswordError("");
//   //   }
//   // }

//   // function checkConfirmPasswordCondition(value) {
//   //   if (value !== password) {
//   //     setConPasswordError("Passwords do not match");
//   //   } else {
//   //     setConPasswordError("");
//   //   }
//   // }

//   // const handleEmailChange = (e) => {
//   //   const value = e.target.value;
//   //   setEmail(value);
//   //   checkEmailCondition(value);
//   // };

//   // const handlePasswordChange = (e) => {
//   //   const value = e.target.value;
//   //   setPassword(value);
//   //   checkPasswordCondition(value);
//   //   checkConfirmPasswordCondition(confirmPassword);
//   // };

//   // const handleConfirmPasswordChange = (e) => {
//   //   const value = e.target.value;
//   //   setConfirmPassword(value);
//   //   checkConfirmPasswordCondition(value);
//   // };

//   // const handleEmailBlur = () => {
//   //   checkEmailCondition(email);
//   // };

//   // const handlePasswordBlur = () => {
//   //   checkPasswordCondition(password);
//   //   checkConfirmPasswordCondition(confirmPassword);
//   // };

//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (!emailError && !passwordError && !conPasswordError && isAgreed) {
//   //     // Handle form submission
//   //     console.log("Form submitted!");
//   //   }
//   // };
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

//   const [formFields, setFormFields] = useState({
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [isDirty, setIsDirty] = useState({
//     email: false,
//     password: false,
//   });
//   const handleChange = (event) => {
//     const { value, name } = event?.target;
//     const updatedFormFields = { ...formFields };
//     updatedFormFields[name] = value;
//     // console.log("updatedFormFields >>", updatedFormFields);
//     setFormFields(updatedFormFields);
//     validateForm(updatedFormFields);
//   };
//   const handleBlur = (event) => {
//     const { name } = event?.target;
//     const updatedIsDirty = { ...isDirty };
//     updatedIsDirty[name] = true;
//     setIsDirty(updatedIsDirty);
//     validateForm(formFields);
//   };
//   const markAllDirty = () => {
//     return new Promise((resolve) => {
//       Object.keys(isDirty).forEach((each) => {
//         isDirty[each] = true;
//       });
//       setIsDirty(isDirty);
//       resolve();
//     });
//   };
//   const validateForm = (updatedFormFields) => {
//     const updatedErrors = { ...errors };
//     let isFormValid = true;
//     return new Promise((resolve) => {
//       Object.keys(updatedFormFields).forEach((each) => {
//         switch (each) {
//           case "email":
//             if (updatedFormFields?.email) {
//               if (emailRegex.test(updatedFormFields?.email)) {
//                 delete updatedErrors?.email;
//               } else {
//                 updatedErrors.email = "Invaild email";
//                 isFormValid = false;
//               }
//             } else {
//               updatedErrors.email = "*Required";
//               isFormValid = false;
//             }
//             setErrors(updatedErrors);
//             break;
//           case "password":
//             if (updatedFormFields?.password) {
//               if (passwordRegex.test(updatedFormFields?.password)) {
//                 delete updatedErrors?.password;
//               } else {
//                 updatedErrors.password = "Invaild password";
//                 isFormValid = false;
//               }
//             } else {
//               updatedErrors.password = "*Required";
//               isFormValid = false;
//             }
//             setErrors(updatedErrors);
//             break;
//           default:
//             break;
//         }
//       });
//       resolve(isFormValid);
//     });
//   };
//   const handleSubmit = async () => {
//     try {
//       await markAllDirty();
//       const isValid = await validateForm(formFields);
//       console.log("isValid >>", isValid);
//     } catch (error) {}
//   };
//   // console.log("isDirty >>", isDirty);
//   console.log("errors >>", errors);

//   return (
//     <div
//       style={{
//         height: "600px",
//         width: "550px",
//         paddingTop: "10px",
//         borderRadius: "10px",
//         boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
//       }}
//     >
//       <h1>
//         Sign <span style={{ color: "aqua" }}>up</span>
//       </h1>
//       <form onSubmit={handleSubmit}>
//         <div style={{ display: "flex", marginLeft: "75px" }}>
//           <div>
//             <label>First Name:</label>
//             <div>
//               <input
//                 type="text"
//                 value={fName}
//                 onChange={(e) => setFName(e.target.value)}
//                 required
//                 style={{
//                   height: "30px",
//                   width: "200px",
//                   marginRight: "10px",
//                   fontSize: "16px",
//                 }}
//               />
//             </div>
//           </div>
//           <div>
//             <label>Last Name:</label>
//             <div>
//               <input
//                 type="text"
//                 value={lName}
//                 onChange={(e) => setLName(e.target.value)}
//                 required
//                 style={{ height: "30px", width: "200px", fontSize: "16px" }}
//               />
//             </div>
//           </div>
//         </div>
//         <div style={{ margin: "10px" }}>
//           <label>Email:</label>
//           <div>
//             <input
//               type="email"
//               value={email}
//               // onChange={handleEmailChange}
//               // onBlur={handleEmailBlur}
//               required
//               style={{
//                 height: "30px",
//                 width: "415px",
//                 marginLeft: "20px",
//                 fontSize: "16px",
//               }}
//             />
//           </div>
//           <span style={{ color: "red" }}>{emailError}</span>
//         </div>
//         <div style={{ margin: "10px" }}>
//           <label>Password:</label>
//           <div>
//             <input
//               type="password"
//               value={password}
//               // onChange={handlePasswordChange}
//               // onBlur={handlePasswordBlur}
//               required
//               style={{
//                 height: "30px",
//                 width: "415px",
//                 marginLeft: "20px",
//                 fontSize: "20px",
//               }}
//             />
//           </div>
//           <span style={{ color: "red" }}>{passwordError}</span>
//         </div>
//         <div style={{ margin: "10px" }}>
//           <label>Confirm Password:</label>
//           <div>
//             <input
//               type="password"
//               value={confirmPassword}
//               // onChange={handleConfirmPasswordChange}
//               required
//               style={{
//                 height: "30px",
//                 width: "415px",
//                 marginLeft: "20px",
//                 fontSize: "20px",
//               }}
//             />
//           </div>
//           <span style={{ color: "red" }}>{conPasswordError}</span>
//         </div>
//         <div>
//           <input
//             type="checkbox"
//             checked={isAgreed}
//             // onChange={() => setIsAgreed(!isAgreed)}
//           />
//           <label style={{ marginLeft: "10px" }}>
//             I agree to the terms of use
//           </label>
//         </div>
//         <div>
//           <button
//             type="submit"
//             style={{ backgroundColor: "aqua", marginTop: "10px" }}
//           >
//             Sign Up
//           </button>
//         </div>
//       </form>
//       <div>
//         Already have an account? <Link to="/login">Log in</Link>
//       </div>
//     </div>
//   );
// }

// export default SignUp;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
var token = Math.floor(Math.random() * 90000000) + 10000000;
function SignUp() {
  const emailRegex = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const [formFields, setFormFields] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(formFields);

  const [errors, setErrors] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [isDirty, setIsDirty] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields((prevFields) => ({
      ...prevFields,
      [name]: value,
    }));
    validateField(name, value);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setIsDirty((prevDirty) => ({
      ...prevDirty,
      [name]: true,
    }));
    validateField(name, formFields[name]);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "fName":
        if (!value) {
          error = "*Required";
        }
        break;
      case "lName":
        if (!value) {
          error = "*Required";
        }
        break;
      case "email":
        if (!value) {
          error = "*Required";
        } else if (!emailRegex.test(value)) {
          error = "Invalid email";
        }
        break;
      case "password":
        if (!value) {
          error = "*Required";
        } else if (!passwordRegex.test(value)) {
          error = "Invalid password";
        }
        break;
      case "confirmPassword":
        if (!value) {
          error = "*Required";
        } else if (value !== formFields.password) {
          error = "Passwords do not match";
        }
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    Object.keys(formFields).forEach((key) => {
      const error = validateField(key, formFields[key]);
      if (error) isValid = false;
    });
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid && isAgreed) {
      let dataset = {
        ...formFields,
        tokenId: token,
        isLogin: false,
        isAdmin: false,
      };
      let existingData = JSON.parse(localStorage.getItem("formFields")) || [];
      existingData.push(dataset);
      localStorage.setItem("formFields", JSON.stringify(existingData));

      navigate("/");
      console.log("Form submitted with data:", dataset);
    }
  };

  const isFormComplete = () => {
    return (
      Object.values(formFields).every((field) => field.trim() !== "") &&
      isAgreed
    );
  };

  return (
    <div
      style={{
        height: "600px",
        width: "550px",
        paddingTop: "10px",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.56) 0px 22px 70px 4px",
      }}
    >
      <h1>
        Sign <span style={{ color: "aqua" }}>up</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", marginLeft: "75px" }}>
          <div>
            <label>First Name:</label>
            <div>
              <input
                type="text"
                name="fName"
                value={formFields.fName}
                onChange={handleChange}
                style={{
                  height: "30px",
                  width: "200px",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
              />
            </div>
            <span style={{ color: "red" }}>{errors.fName}</span>
          </div>
          <div>
            <label>Last Name:</label>
            <div>
              <input
                type="text"
                name="lName"
                value={formFields.lName}
                onChange={handleChange}
                style={{ height: "30px", width: "200px", fontSize: "16px" }}
              />
            </div>
            <span style={{ color: "red" }}>{errors.lName}</span>
          </div>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Email:</label>
          <div>
            <input
              type="email"
              name="email"
              value={formFields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                height: "30px",
                width: "415px",
                marginLeft: "20px",
                fontSize: "16px",
              }}
            />
          </div>
          <span style={{ color: "red" }}>{errors.email}</span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Password:</label>
          <div>
            <input
              type="password"
              name="password"
              value={formFields.password}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                height: "30px",
                width: "415px",
                marginLeft: "20px",
                fontSize: "20px",
              }}
            />
          </div>
          <span style={{ color: "red" }}>{errors.password}</span>
        </div>
        <div style={{ margin: "10px" }}>
          <label>Confirm Password:</label>
          <div>
            <input
              type="password"
              name="confirmPassword"
              value={formFields.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{
                height: "30px",
                width: "415px",
                marginLeft: "20px",
                fontSize: "20px",
              }}
            />
          </div>
          <span style={{ color: "red" }}>{errors.confirmPassword}</span>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isAgreed}
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <label style={{ marginLeft: "10px" }}>
            I agree to the terms of use
          </label>
        </div>
        <div>
          <button
            type="submit"
            disabled={!isFormComplete()}
            style={{ backgroundColor: "aqua", marginTop: "10px" }}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div>
        Already have an account? <Link to="/">Log in</Link>
      </div>
    </div>
  );
}

export default SignUp;
