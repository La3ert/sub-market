import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import ProtectedRoute from "./components/guards/ProtectedRoute.tsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/super-admin/dashboard" />
                    <Route path="/super-admin/merchants"/>
                    <Route path="/super-admin/billing" />
                    <Route path="/super-admin/settings"/>
                </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['MERCHANT_ADMIN']} />}>
                <Route element={<DashboardLayout />}>
                    <Route path="/merchant/dashboard" />
                    <Route path="/merchant/analytics" />
                    <Route path="/merchant/settings" />
                    <Route path="/merchant/team" />
                </Route>
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['MERCHANT_MANAGER', 'MERCHANT_ADMIN']} />}>
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