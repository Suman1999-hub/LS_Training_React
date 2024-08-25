/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Component, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function PublicRoutesPage(props) {
  const { Component } = props;
  const [isAuthorize, setIsAuthorize] = useState(false);
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

    setIsAuthorize(isAuthorized);
  }, []);

  if (!isAuthorize) {
    return <Component {...props} />;
  }

  return <Navigate to="/" />;
}

export default PublicRoutesPage;
