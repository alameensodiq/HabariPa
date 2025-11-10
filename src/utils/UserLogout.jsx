export const UserLogOut = () => {
  sessionStorage.clear();
  window.location.pathname = "/";
};
