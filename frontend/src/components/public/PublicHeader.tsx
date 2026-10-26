import Logo from "../shared/Logo.tsx";
import Notifications from "../shared/Notifications.tsx";
import UserMenu from "../shared/UserMenu.tsx";
import Button from "../shared/Button.tsx";
import PublicNavbar from "./PublicNavbar.tsx";

function PublicHeader({ isAuthenticated }: { isAuthenticated: boolean }) {
  return (
    <div className="public-header">
      <div className="container public-header__inner">
        <Logo />

        <PublicNavbar />

        {isAuthenticated ? (
          <div className="public-header__authentication">
            <Notifications />
            <div className="public-header__divider"></div>
            <UserMenu />
          </div>
        ) : (
          <div className="public-header__authentication public-header__authentication--not-logged">
            <Button variant="outline" to="/login">
              Log In
            </Button>

            <Button variant="primary" to="/register">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PublicHeader;
