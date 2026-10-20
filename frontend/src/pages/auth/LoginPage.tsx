import AuthCard from "../../components/auth/AuthCard.tsx";
import LoginForm from "../../components/auth/LoginForm.tsx";

function LoginPage() {
  return (
    <AuthCard
      title={"Welcome Back"}
      description={"Sign in your account to continue"}
      children={<LoginForm />}
    />
  );
}

export default LoginPage;
