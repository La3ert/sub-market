import AuthCard from "../../components/auth/AuthCard.tsx";
import Button from "../../components/shared/Button.tsx";

function NotFoundPage() {
  return (
    <AuthCard
      title="404 - Page Not Found"
      description="Oops! The page you are looking for doesn't exist or has been moved."
    >
      <div className="error-page__action">
        <Button to={"/"}>Back to Home</Button>
      </div>
    </AuthCard>
  );
}

export default NotFoundPage;
