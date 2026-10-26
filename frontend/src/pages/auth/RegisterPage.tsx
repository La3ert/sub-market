import { useLocation, Link } from "react-router-dom";
import AuthCard from "../../components/auth/AuthCard.tsx";
import RegisterPersonalForm from "../../components/auth/RegisterPersonalForm.tsx";
import RegisterBusinessForm from "../../components/auth/RegisterBusinessForm.tsx";

function RegisterPage() {
  const location = useLocation();
  const isBusiness = location.pathname.includes("business");

  return (
    <AuthCard
      title={`${!isBusiness ? "Create an Account" : "Apply for a Business Account"}`}
    >
      <div className="role-toggle">
        <Link
          to="/register"
          className={`role-toggle__btn ${!isBusiness ? "role-toggle__btn--active" : ""}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="7"
              r="4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Personal
        </Link>

        <Link
          to="/register/business"
          className={`role-toggle__btn ${isBusiness ? "role-toggle__btn--active" : ""}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M3 21h18M5 21V7l8-4v18M13 3l8 4v14M7 11h2M7 15h2M15 11h2M15 15h2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Business
        </Link>
      </div>

      <div className="register-form-container">
        {isBusiness ? <RegisterBusinessForm /> : <RegisterPersonalForm />}
      </div>
    </AuthCard>
  );
}

export default RegisterPage;
