import Input from "../shared/Input.tsx";
import { type SyntheticEvent, useState } from "react";
import Button from "../shared/Button.tsx";
import { AuthService } from "../../services/auth.service.ts";
import { message } from "antd";
import { Link } from "react-router-dom";

const EmailIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const SuccessCheckIcon = (
  <svg
    className="forgot-password-success__icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const handleForgotPassword = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      email,
      source: "forgot_password_form",
    };

    try {
      await AuthService.forgotPassword(formData);
      setIsSuccess(true);
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

  if (isSuccess) {
    return (
      <div className="forgot-password-success">
        {SuccessCheckIcon}
        <h2 className="forgot-password-success__title">Check your email</h2>
        <p className="forgot-password-success__text">
          We have sent a password reset link to{" "}
          <strong className="forgot-password-success__email">{email}</strong>.
        </p>
        <Button to="/login" className="forgot-password-success__action">
          Back to Log In
        </Button>
      </div>
    );
  }

  return (
    <form className="forgot-password-form" onSubmit={handleForgotPassword}>
      {contextHolder}

      <Input
        type="email"
        placeholder="Email Address"
        icon={EmailIcon}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Reset Link"}
      </Button>

      <p className="forgot-password-form__prompt">
        Remember your password?{" "}
        <Link to="/login" className="forgot-password-form__link">
          Log in
        </Link>
      </p>
    </form>
  );
}

export default ForgotPasswordForm;
