import Input from "../shared/Input.tsx";
import Button from "../shared/Button.tsx";
import { Link } from "react-router-dom";

const UserIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const LockIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

function RegisterPersonalForm() {
  return (
    <div className={"register-form"}>
      <div className={"register-form__full-name"}>
        <Input placeholder={"First Name"} icon={UserIcon} />
        <Input placeholder={"Last Name"} icon={UserIcon} />
      </div>
      <Input type={"email"} placeholder={"Work Email"} icon={EmailIcon} />
      <Input type={"password"} placeholder={"Password"} icon={LockIcon} />
      <Button>Create Personal Account</Button>
      <p className="register-form__login-prompt">
        Already have an account? <Link to="/log-in">Sign in</Link>
      </p>
    </div>
  );
}

export default RegisterPersonalForm;
