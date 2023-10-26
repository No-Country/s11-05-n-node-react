import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const AuthGuard = ({ privateValidation }) => {
  const token = useSelector(store => store.auth.token);

  if (!token && privateValidation) return <Outlet />;

  if (!token) return <Navigate replace to={"/"} />;

  return <Navigate replace to={"/"} />;
};

export default AuthGuard;
