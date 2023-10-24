import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const AuthGuard = ({ privateValidation }) => {
  const token = useSelector(store => store.auth.token);

  if (!token && privateValidation) return <Outlet />;

  if (!token) return <Navigate replace to={"/home"} />;

  return <Navigate replace to={"/home"} />;
};

export default AuthGuard;
