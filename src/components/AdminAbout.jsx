import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminAbout() {
  const navigate = useNavigate();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formFields"));
    const isAdminUser = localData?.find(
      (user) => user.isLogin === true && user.isAdmin === true
    );

    if (!isAdminUser) {
      navigate("/");
    } else {
      setIsAuthorized(true);
    }
  }, [navigate]);
  return isAuthorized ? <h1>Admin About</h1> : null;
}

export default AdminAbout;
