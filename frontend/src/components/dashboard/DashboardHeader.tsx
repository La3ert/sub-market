import Notifications from "../shared/Notifications.tsx";
import UserMenu from "../shared/UserMenu.tsx";

function DashboardHeader() {
    return (
        <header className="dashboard-header">
            <div className="dashboard-header__actions">
                <Notifications />
                <div className="dashboard-header__divider"></div>
                <UserMenu />
            </div>
        </header>
    );
}

export default DashboardHeader;