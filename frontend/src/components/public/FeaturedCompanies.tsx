import useEmblaCarousel from "embla-carousel-react";
import CompanyCard, { type CompanyData } from "./CompanyCard.tsx";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import SectionLayout from "./SectionLayout.tsx";

interface FeaturedCompaniesProps {
  eyebrowText?: string;
  title: string;
  subtitle: string;
  companies: CompanyData[];
}

function FeaturedCompanies({
  eyebrowText,
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
    <SectionLayout
      eyebrowText={eyebrowText}
      title={title}
      subtitle={subtitle}
      content={
        <div className="featured-companies__viewport" ref={emblaRef}>
          <div className="featured-companies__container">
            {companies.map((company) => (
              <div className="featured-companies__slide" key={company.id}>
                <CompanyCard {...company} />
              </div>
            ))}
          </div>
        </div>
      }
      contentType={"scroll"}
    />
  );
}

export default FeaturedCompanies;
