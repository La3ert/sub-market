import type { StepItem } from "./HowItWorks.tsx";

interface StepCardProps extends StepItem {
  number: number;
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <div className="step-card">
      <div className="step-card__visual">
        <div className="step-card__number">{number}</div>
        <div className="step-card__icon">{icon}</div>
      </div>
      <div className="step-card__info">
        <h3 className="step-card__title">{title}</h3>
        <p className="step-card__description">{description}</p>
      </div>
    </div>
  );
}

export default StepCard;
