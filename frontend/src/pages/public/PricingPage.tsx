import Hero from "../../components/public/Hero.tsx";
import heroImgDesktop from "../../assets/images/PricingImg.png";

function PricingPage() {
  return (
    <div className={"pricing-page"}>
      <Hero
        eyebrowText={"SIMPLE & TRANSPARENT PRICING"}
        title={
          <>
            Chose the Plan That Fits to{" "}
            <span className={"text-highlight"}>Your Business</span>
          </>
        }
        description={
          "Flexible and transparent pricing for businesses of any size. No hidden fees, no long-term contracts. Just powerful tools to grow your subscription business."
        }
        desktopImgSrc={heroImgDesktop}
        activeFeatures={["noHiddenCosts", "cancelAnyTime", "support247"]}
      ></Hero>
    </div>
  );
}

export default PricingPage;
