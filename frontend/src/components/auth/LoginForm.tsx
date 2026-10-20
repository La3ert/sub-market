import { Link } from "react-router-dom";
import Button from "../shared/Button.tsx";
import Input from "../shared/Input.tsx";

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

function LoginForm() {
  return (
    <div className="login-form">
      <Input type="email" placeholder="Email Address" icon={EmailIcon} />
      <Input type="password" placeholder="Password" icon={LockIcon} />

      <div className="login-form__utils">
        <label className="login-form__remember-me">
          <input type="checkbox" className="login-form__checkbox-input" />
          <span className="login-form__checkbox-custom">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <path
                d="M20 6L9 17L4 12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="login-form__remember-me-text">Remember me</span>
        </label>

        <Link to="/forgot-password" className="login-form__forgot">
          Forgot password?
        </Link>
      </div>

      <Button variant="primary">Sign In</Button>

      <p className="login-form__register-prompt">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}

export default LoginForm;
