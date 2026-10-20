import Logo from "../shared/Logo.tsx";
import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  description?: string;
  children: ReactNode;
}

function AuthCard({ title, description, children }: AuthCardProps) {
  return (
    <div className={"auth-card"}>
      <Logo />
      <h1 className={"auth-card__title"}>{title}</h1>
      {description && <p className="auth-card__description">{description}</p>}
      <div className="auth-card__content">{children}</div>
    </div>
  );
}

export default AuthCard;
