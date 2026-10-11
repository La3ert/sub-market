import Eyebrow from "../shared/Eyebrow.tsx";
import { type ReactNode } from "react";

interface SectionProps {
  backgroundColor?: "light" | "dark";
  eyebrowText?: string;
  align?: "left" | "center";
  title: string;
  subtitle?: string;
  content: ReactNode;
  contentType: "default" | "scroll";
}

function SectionLayout({
  backgroundColor = "light",
  eyebrowText,
  title,
  subtitle,
  align = "left",
  content,
  contentType = "default",
}: SectionProps) {
  return (
    <div className={`section-layout section-layout--${backgroundColor}`}>
      <div className="container section-layout__inner">
        <div
          className={`section-layout__header section-layout__header--${align}`}
        >
          {eyebrowText && <Eyebrow eyebrowText={eyebrowText} align={align} />}
          <h2 className="section-layout__title">{title}</h2>
          <p className="section-layout__subtitle">{subtitle}</p>
        </div>
        <div
          className={`section-layout__content section-layout__content--${contentType}`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}

export default SectionLayout;
