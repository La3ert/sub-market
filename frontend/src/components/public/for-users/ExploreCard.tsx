import type { ReactNode } from "react";

export interface CompanyData {
  id: string;
  icon: ReactNode;
  name: string;
  companiesCount: number;
}

function ExploreCard({ icon, name, companiesCount }: CompanyData) {
  return (
    <div className="explore-card">
      <div className="explore-card__icon">{icon}</div>
      <h3 className="explore-card__name">{name}</h3>
      <p className="explore-card__companies-count">
        {companiesCount} companies
      </p>
    </div>
  );
}

export default ExploreCard;
