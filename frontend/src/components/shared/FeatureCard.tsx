import type { ReactNode } from "react";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  linkUrl?: string;
}

function FeatureCard({
  icon,
  title,
  description,
  linkText,
  linkUrl,
}: CardProps) {
  return (
    <div className="feature-card">
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__description">{description}</p>

      {linkText && linkUrl && (
        <a href={linkUrl} className="feature-card__link">
          {linkText}
        </a>
      )}
    </div>
  );
}

export default FeatureCard;
