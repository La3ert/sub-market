import { useAppSelector } from "../../store/hooks.ts";
import Dropdown from "./Dropdown.tsx";
import { logout } from "../../store/authSlice.ts";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function UserMenu() {
  const { role, user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Dropdown
      align="center"
      trigger={(isOpen) => (
        <div className="user-menu">
          <div className="user-menu__avatar">
            <img src="/img.png" alt="avatar" />
          </div>
          <div className="user-menu__info">
            <span className="user-menu__name">
              {user?.name || "Loading..."}
            </span>
            <span className="user-menu__role">
              {role ? role.replace("_", " ").toLowerCase() : "USER"}
            </span>
          </div>
          <svg
            className="user-menu__chevron"
            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}
            xmlns="http://www.w3.org/2000/svg"
            width="1.25rem"
            height="1.25rem"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      )}
    >
      <button className="dropdown__item">Profile</button>
      <button className="dropdown__item">Settings</button>
      <button
        className="dropdown__item dropdown__item--danger"
        onClick={handleLogout}
      >
        Logout
      </button>
    </Dropdown>
  );
}

export default UserMenu;
