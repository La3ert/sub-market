import useEmblaCarousel from "embla-carousel-react";
import CompanyCard, { type CompanyData } from "./CompanyCard.tsx";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

interface FeaturedCompaniesProps {
  title: string;
  subtitle: string;
  companies: CompanyData[];
}

function FeaturedCompanies({
  title,
  subtitle,
  companies,
}: FeaturedCompaniesProps) {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "y",
      }),
    ],
  );

  return (
    <section className="featured-companies">
      <div className="container">
        <div className="featured-companies__header">
          <div className="featured-companies__heading">
            <h2 className="featured-companies__title">{title}</h2>
            <p className="featured-companies__subtitle">{subtitle}</p>
          </div>
          <a href="/companies" className="featured-companies__link">
            View all →
          </a>
        </div>

        <div className="featured-companies__viewport" ref={emblaRef}>
          <div className="featured-companies__container">
            {companies.map((company) => (
              <div className="featured-companies__slide" key={company.id}>
                <CompanyCard {...company} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedCompanies;
