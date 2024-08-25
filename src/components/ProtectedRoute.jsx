/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute(props) {
  const { Component } = props;
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formFields"));
    let isAuthorized = false;
    let currentUser = null;

    if (localData) {
      currentUser = localData.find((user) => user.isLogin === true);
      if (currentUser) {
        isAuthorized = true;
      }
    }

    setIsAuthorized(isAuthorized);
  }, []);

  if (!isAuthorized) {
    return <Navigate to="/login" />;
  }

  return <Component {...props} />;
}

export default ProtectedRoute;
