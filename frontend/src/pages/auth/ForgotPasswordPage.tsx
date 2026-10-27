import AuthCard from "../../components/auth/AuthCard.tsx";
import ForgotPasswordForm from "../../components/auth/ForgotPasswordForm.tsx";

function ForgotPasswordPage() {
  return (
    <AuthCard
      title={"Forgot password"}
      description={
        "Enter the email address associated with your account, and we'll send you a link to reset your password."
      }
      children={<ForgotPasswordForm />}
    ></AuthCard>
  );
}

export default ForgotPasswordPage;
