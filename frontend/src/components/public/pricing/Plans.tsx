import SectionLayout from "../SectionLayout.tsx";
import { PRICING_PLANS } from "../../../data/pricingData.tsx";
import PlanCard from "./PlanCard.tsx";

function Plans() {
  return (
    <SectionLayout
      align={"center"}
      eyebrowText={"PLANS FOR BUSINESSES"}
      title={"Simple, Flexible, Scalable"}
      subtitle={
        "Start with the plan that fits your needs. Upgrade or downgrade anytime."
      }
      content={
        <>
          {PRICING_PLANS.map((card) => (
            <PlanCard
              id={card.id}
              icon={card.icon}
              name={card.name}
              description={card.description}
              price={card.price}
              pricePeriod={card.pricePeriod}
              isPopular={card.isPopular}
              buttonText={card.buttonText}
              buttonVariant={card.buttonVariant}
              features={card.features}
            />
          ))}
        </>
      }
      contentType={"default"}
    />
  );
}

export default Plans;
