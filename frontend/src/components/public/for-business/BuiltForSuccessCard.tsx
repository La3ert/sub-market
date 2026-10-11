import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function BuiltForSuccessCard({ icon, title, description }: CardProps) {
  return (
    <div className="built-for-success-card">
      <div className="built-for-success-card__icon">{icon}</div>
      <h3 className="built-for-success-card__title">{title}</h3>
      <p className="built-for-success-card__description">{description}</p>

      <a href="#" className="built-for-success-card__link">
        Learn more →
      </a>
    </div>
  );
}

export default BuiltForSuccessCard;
