import { Link, useNavigate } from "react-router-dom";
import Button from "../shared/Button.tsx";
import Input from "../shared/Input.tsx";
import { useState, type SyntheticEvent } from "react";
import { AuthService } from "../../services/auth.service.ts";
import { message } from "antd";

import { useDispatch } from "react-redux";
import { setCredentials } from "../../store/authSlice.ts";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await AuthService.login({ email, password });
      await messageApi.success("Successfully logged in!");

      dispatch(
        setCredentials({
          user: {
            id: result.user.id,
            email: result.user.email,
            name: result.user.name,
          },
          token: result.token,
          role: result.user.role,
          rememberMe,
        }),
      );

      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        await messageApi.error(error.message);
      } else {
        await messageApi.error("Unexpected error occurred.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      {contextHolder}

      <Input
        type="email"
        placeholder="Email Address"
        icon={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        icon={LockIcon}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <div className="login-form__utils">
        <label className="login-form__remember-me">
          <input
            type="checkbox"
            className="login-form__checkbox-input"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
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

      <Button type="submit" variant="primary" disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>

      <p className="login-form__register-prompt">
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </form>
  );
}

export default LoginForm;
