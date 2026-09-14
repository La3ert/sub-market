import { Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import DashboardSidebar from "../components/dashboard/DashboardSidebar.tsx";
import DashboardHeader from "../components/dashboard/DashboardHeader.tsx";



function DashboardLayout() {
    const role = useAppSelector((state) => state.auth.role);

    return (
        <div className="dashboard-layout">

            <DashboardSidebar role={role}/>

            <div className="dashboard-layout__main-wrapper">
                <DashboardHeader/>
                <main className="dashboard-layout__content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
