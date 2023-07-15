import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
export const PrivateRoutes = () => {
  const loggedUser = useSelector((state) => {
    return state.user.currentUser;
  });

  if (!loggedUser) {
    toast.warning("You need to login first");
  }

  return loggedUser ? <Outlet /> : <Navigate to="/login" />;
};
