import { useAppSelector } from "../../store/hooks";
import { Navigate, Outlet } from "react-router-dom";
import { setInitialized } from "../../store/authSlice.ts";

interface ProtectedRouteProps {
  allowedRoles?: Array<
    "SUPER_ADMIN" | "MERCHANT_ADMIN" | "MERCHANT_MANAGER" | "CUSTOMER"
  >;
}

function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const role = useAppSelector((state) => state.auth.role);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  if (!isInitialized) {
    return null;
  }

  setInitialized();

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  if (allowedRoles && (!role || !allowedRoles.includes(role))) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
