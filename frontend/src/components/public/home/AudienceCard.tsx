import Button from "../../shared/Button.tsx";
import type { ReactNode } from "react";

interface AudienceCardProps {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
  primaryBtnLabel?: string;
  secondaryBtnLabel?: string;
  audienceImg: string;
  features: string[];
}

function AudienceCard({
  icon,
  title,
  subtitle,
  description,
  primaryBtnLabel,
  secondaryBtnLabel,
  audienceImg,
  features,
}: AudienceCardProps) {
  return (
    <div className="audience-card">
      <div className="audience-card__heading">
        <div className="audience-card__icon">{icon}</div>
        <div className="audience-card__text">
          <h2 className="audience-card__title">{title}</h2>
          <p className="audience-card__subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="audience-card__content">
        <div className="audience-card__text">
          <p className="audience-card__description">{description}</p>

          {features && features.length > 0 && (
            <ul className="audience-card__features">
              {features.map((feature, index) => (
                <li className="audience-card__feature" key={index}>
                  <div className="audience-card__feature-check">
                    <svg
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M256,27.5c-61.03,0-118.42,23.77-161.57,66.93C51.27,137.58,27.5,194.97,27.5,256s23.77,118.42,66.93,161.57    C137.58,460.73,194.97,484.5,256,484.5s118.42-23.77,161.57-66.93C460.73,374.42,484.5,317.03,484.5,256    s-23.77-118.42-66.93-161.57C374.42,51.27,317.03,27.5,256,27.5z M256,452.5c-108.35,0-196.5-88.15-196.5-196.5    S147.65,59.5,256,59.5S452.5,147.65,452.5,256S364.35,452.5,256,452.5z" />
                      <path d="M347.7,131.81c-16.03,0-31.09,6.24-42.43,17.57l-85.16,85.16l-13.39-13.39    c-11.33-11.33-26.4-17.58-42.43-17.58c-16.03,0-31.1,6.24-42.43,17.57c-11.32,11.32-17.56,26.39-17.56,42.43    s6.24,31.1,17.56,42.43l57.17,57.17c10.97,10.97,25.56,17.01,41.08,17.01s30.1-6.04,41.08-17.01l128.94-128.94    c11.32-11.32,17.56-26.39,17.56-42.43c0-16.04-6.24-31.1-17.56-42.42C378.8,138.05,363.73,131.81,347.7,131.81z M367.5,211.61    L238.57,340.55c-4.93,4.93-11.48,7.64-18.45,7.64s-13.52-2.71-18.45-7.64l-57.17-57.17c-5.28-5.28-8.18-12.31-8.18-19.8    s2.91-14.52,8.19-19.8c5.29-5.29,12.32-8.2,19.8-8.2s14.51,2.91,19.8,8.2l24.71,24.7c6.25,6.25,16.38,6.25,22.63,0l96.47-96.47    c5.29-5.29,12.32-8.2,19.8-8.2s14.51,2.91,19.8,8.2c5.28,5.28,8.18,12.31,8.18,19.8S372.78,206.33,367.5,211.61z" />
                    </svg>
                  </div>
                  <span className="audience-card__feature-text">{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="audience-card__actions">
            {primaryBtnLabel && (
              <Button variant="primary">{primaryBtnLabel}</Button>
            )}
            {secondaryBtnLabel && (
              <Button variant="outline">{secondaryBtnLabel}</Button>
            )}
          </div>
        </div>

        <div className="audience-card__visual">
          <img src={audienceImg} alt={title} className="audience-card__image" />
        </div>
      </div>
    </div>
  );
}

export default AudienceCard;
