const localData = JSON.parse(localStorage.getItem("formFields"));
export const isAdminUser = localData?.find(
  (user) => user.isLogin === true && user.isAdmin === true
)
  ? true
  : false;
