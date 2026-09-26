import type { ReactNode } from "react";

export interface CompanyData {
  id: string;
  logo: ReactNode;
  name: string;
  category: string;
  rating: number;
  reviews: number;
}

function CompanyCard({ logo, name, category, rating, reviews }: CompanyData) {
  return (
    <article className="company-card">
      <div className="company-card__logo">{logo}</div>
      <h3 className="company-card__name">{name}</h3>
      <p className="company-card__category">{category}</p>
      <div className="company-card__rating">
        <span className="company-card__star">★</span>
        <span className="company-card__score">{rating}</span>
        <span className="company-card__reviews">({reviews})</span>
      </div>
    </article>
  );
}

export default CompanyCard;
