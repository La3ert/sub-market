import { useAppSelector } from "../../store/hooks.ts";
import Dropdown from "./Dropdown.tsx";

function UserMenu() {
  const role = useAppSelector((state) => state.auth.role);

  return (
    <Dropdown
      align="center"
      trigger={(isOpen) => (
        <div className="user-menu">
          <div className="user-menu__avatar">
            <img src="/img.png" alt="avatar" />
          </div>
          <div className="user-menu__info">
            <span className="user-menu__name">John Doe</span>
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
      <button className="dropdown__item dropdown__item--danger">Logout</button>
    </Dropdown>
  );
}

export default UserMenu;
