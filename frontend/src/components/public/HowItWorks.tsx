import type { ReactNode } from "react";
import StepCard from "./StepCard.tsx";
import SectionLayout from "./SectionLayout.tsx";

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
    <SectionLayout
      backgroundColor={"dark"}
      eyebrowText={eyebrowText}
      align={align}
      title={title}
      subtitle={description}
      content={
        <>
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </>
      }
    />
  );
}

export default HowItWorks;
