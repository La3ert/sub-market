import type { ReactNode } from "react";
import StepCard from "./StepCard.tsx";
import Eyebrow from "../shared/Eyebrow.tsx";

export interface StepItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface HowItWorksProps {
  eyebrowText: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  steps: StepItem[];
}

function HowItWorks({
  eyebrowText,
  title,
  description,
  align = "center",
  steps,
}: HowItWorksProps) {
  return (
    <section className="how-it-works">
      <div className="container how-it-works__inner">
        <div className={`how-it-works__header how-it-works__header--${align}`}>
          <Eyebrow eyebrowText={eyebrowText} align={align} />
          <h2 className="how-it-works__title">{title}</h2>
          {description && (
            <p className="how-it-works__description">{description}</p>
          )}
        </div>

        <div className="how-it-works__grid">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
