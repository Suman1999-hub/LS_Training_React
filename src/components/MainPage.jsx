import { Link } from "react-router-dom";
//import ConfettiCom from "../ConfettiCom";

import { useEffect, useState } from "react";

function MainPage() {
  function logout() {
    const storedUsers = JSON.parse(localStorage.getItem("formFields")) || [];
    const userIndex = storedUsers.findIndex((user) => user.isLogin);

    if (userIndex !== -1) {
      storedUsers[userIndex].isLogin = false;
      localStorage.setItem("formFields", JSON.stringify(storedUsers));
    }

    window.location.href = "/login";
  }

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formFields"));
    const isAdminUser = localData?.find(
      (user) => user.isLogin === true && user.isAdmin === true
    )
      ? true
      : false;

    setIsAuthorized(isAdminUser);
  }, []);
  // console.log("isAuth", isAuthorized);
  return (
    <>
      <div>
        {/* Uncomment this line if you want to use ConfettiCom */}
        {/* <ConfettiCom /> */}
        <h1>Welcome To Home Page</h1>
        <div>
          {isAuthorized ? (
            <>
              <Link to="/admincontact">
                <button
                  style={{ backgroundColor: "aqua", marginRight: "10px" }}
                >
                  Contact Us
                </button>
              </Link>
              <Link to="/adminabout">
                <button
                  style={{
                    backgroundColor: "green",
                    marginRight: "10px",
                    color: "white",
                  }}
                >
                  About
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/contact">
                <button
                  style={{ backgroundColor: "aqua", marginRight: "10px" }}
                >
                  Contact Us
                </button>
              </Link>
              <Link to="/about">
                <button
                  style={{
                    backgroundColor: "green",
                    marginRight: "10px",
                    color: "white",
                  }}
                >
                  About
                </button>
              </Link>
            </>
          )}

          <button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={logout}
          >
            Log Out
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
