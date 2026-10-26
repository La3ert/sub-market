import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import ProtectedRoute from "./components/guards/ProtectedRoute.tsx";
import PublicLayout from "./layouts/PublicLayout.tsx";
import HomePage from "./pages/public/HomePage.tsx";
import ForBusinessPage from "./pages/public/ForBusinessPage.tsx";
import ForUsersPage from "./pages/public/ForUsersPage.tsx";
import PricingPage from "./pages/public/PricingPage.tsx";
import AuthLayout from "./layouts/AuthLayout.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LoginPage from "./pages/auth/LoginPage.tsx";
import { useDispatch } from "react-redux";
import { AuthService } from "./services/auth.service.ts";
import { logout, setCredentials, setInitialized } from "./store/authSlice.ts";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");

      if (!token) {
        dispatch(setInitialized());
        return;
      }

      try {
        const user = await AuthService.getMe();

        dispatch(
          setCredentials({
            user: {
              id: user.id,
              email: user.email,
              name: user.name,
            },
            token: token,
            role: user.role,
          }),
        );
      } catch (error) {
        console.error("Auth check failed:", error);
        dispatch(logout());
      } finally {
        dispatch(setInitialized());
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/for-business" element={<ForBusinessPage />} />
          <Route path="/for-users" element={<ForUsersPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/explore" />
          <Route path="/categories/:slug" />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/business" element={<RegisterPage />} />
          <Route path="/auth" element={<Navigate to="/login" replace />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["SUPER_ADMIN"]} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/super-admin/dashboard" />
            <Route path="/super-admin/merchants" />
            <Route path="/super-admin/billing" />
            <Route path="/super-admin/settings" />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["MERCHANT_ADMIN"]} />}>
          <Route element={<DashboardLayout />}>
            <Route path="/merchant/dashboard" />
            <Route path="/merchant/analytics" />
            <Route path="/merchant/settings" />
            <Route path="/merchant/team" />
          </Route>
        </Route>

        <Route
          element={
            <ProtectedRoute
              allowedRoles={["MERCHANT_MANAGER", "MERCHANT_ADMIN"]}
            />
          }
        >
          <Route element={<DashboardLayout />}>
            <Route path="/merchant/plans" />
            <Route path="/merchant/customers" />
            <Route path="/merchant/invoices" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
