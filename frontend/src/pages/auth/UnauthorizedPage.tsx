import AuthCard from "../../components/auth/AuthCard.tsx";
import { useNavigate } from "react-router-dom";
import Button from "../../components/shared/Button.tsx";

function UnauthorizedPage() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if ((window.history.state?.idx ?? 0) > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <AuthCard
      title="Access Denied"
      description="You do not have permission to view this page."
    >
      <div className="error-page__action">
        <Button onClick={handleGoBack}>Go Back</Button>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </AuthCard>
  );
}

export default UnauthorizedPage;
