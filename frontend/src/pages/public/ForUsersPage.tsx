import Hero from "../../components/public/Hero.tsx";
import heroImgDesktop from "../../assets/images/tempHero.png";
import Benefits from "../../components/public/for-users/Benefits.tsx";
import FeaturedCompanies from "../../components/public/FeaturedCompanies.tsx";
import { FEATURED_COMPANIES } from "../../data/featuredCompaniesData";
import Explore from "../../components/public/for-users/Explore.tsx";

function ForUsersPage() {
  return (
    <div className="for-users-page">
      <Hero
        eyebrowText={"FOR USERS"}
        title={
          <>
            Discover the Best Subscription for{"  "}
            <span className="text-highlight">Your Needs</span>
          </>
        }
        description={
          "Explore trusted companies, find the right subscription for plans, and get the most out of the services you love - all in one place."
        }
        desktopImgSrc={heroImgDesktop}
        primaryBtnLabel={
          <>
            Browse Companies{" "}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18M18 12L13 7M18 12L13 17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </>
        }
        secondaryBtnLabel="Create an Account"
        activeFeatures={["verifiedCompanies", "securePayments", "support247"]}
      />

      <Benefits />

      <Explore />

      <FeaturedCompanies
        eyebrowText={"HANDPICKED"}
        title={"Featured Companies"}
        subtitle={"Top-rated companies, handpicked for you."}
        companies={FEATURED_COMPANIES}
      />
    </div>
  );
}

export default ForUsersPage;
