import Hero from "../../components/public/Hero.tsx";
import heroImgDesktop from "../../assets/images/tempHero.png";
import Audiences from "../../components/public/home/Audiences.tsx";
import HowItWorks from "../../components/public/HowItWorks.tsx";
import FeaturedCompanies from "../../components/public/FeaturedCompanies.tsx";
import { FEATURED_COMPANIES } from "../../data/featuredCompaniesData";

const HOW_IT_WORKS_STEPS = [
  {
    icon: (
      <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"
        ></path>
      </svg>
    ),
    title: "Companies Register",
    description:
      "Businesses create their profiles and set up subscription plans.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="1"
          d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9.5 12.4L10.9286 14L14.5 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Moderation & Approval",
    description:
      "Our team reviews and approves companies to ensure quality and trust.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Customers Discover",
    description: "Browse companies, compare plans and find the perfect fit.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 11H22L22 15.0658C22.0001 15.9523 22.0001 16.7161 21.9179 17.3278C21.8297 17.9833 21.631 18.6117 21.1213 19.1213C20.6117 19.631 19.9833 19.8297 19.3278 19.9179C18.7161 20.0001 17.9523 20.0001 17.0658 20H6.93414C6.04767 20.0001 5.28387 20.0001 4.67221 19.9179C4.0167 19.8297 3.38835 19.631 2.87869 19.1213C2.36902 18.6117 2.17028 17.9833 2.08215 17.3278C1.99991 16.7161 1.99995 15.9523 2 15.0658L2 11ZM5 14C5 13.4477 5.44772 13 6 13H8C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15H6C5.44772 15 5 14.5523 5 14ZM10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z"
          fill="currentColor"
        />
        <path
          d="M22 9.00001L22 8.93418C22.0001 8.04769 22.0001 7.28387 21.9179 6.67221C21.8297 6.0167 21.631 5.38835 21.1213 4.87869C20.6117 4.36902 19.9833 4.17028 19.3278 4.08215C18.7161 3.99991 17.9523 3.99995 17.0658 4L6.93418 4C6.04769 3.99995 5.28388 3.99991 4.67222 4.08215C4.0167 4.17028 3.38835 4.36902 2.87869 4.87868C2.36902 5.38835 2.17028 6.0167 2.08215 6.67221C1.99991 7.28388 1.99995 8.0477 2 8.9342L2 9L22 9.00001Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Subscribe & Enjoy",
    description:
      "Make a secure payment and start using the service immediately.",
  },
];

function HomePage() {
  return (
    <div className="home">
      <div className="home__inner">
        <Hero
          eyebrowText={"B2B2C SUBSCRIPTION MARKETPLACE"}
          title={
            <>
              Connect Businesses with Customers through{" "}
              <span className="text-highlight">Subscriptions</span>
            </>
          }
          description={
            "A modern platform where companies create their storefronts and subscriptions plans, and customers discover and purchase the services they love."
          }
          primaryBtnLabel={
            <>
              Get Started
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M18 12L13 7M18 12L13 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </>
          }
          secondaryBtnLabel={"Explore companies"}
          desktopImgSrc={heroImgDesktop}
          activeFeatures={[
            "trustedCompanies",
            "easyManagement",
            "trustedCompanies",
            "support247",
          ]}
        />

        <Audiences />

        <HowItWorks
          eyebrowText={"HOW IT WORKS"}
          title={"Simple Steps to Start"}
          steps={HOW_IT_WORKS_STEPS}
        />

        <FeaturedCompanies
          title={"Featured Companies"}
          subtitle={"Trusted Businesses. Quality services"}
          companies={FEATURED_COMPANIES}
        />
      </div>
    </div>
  );
}

export default HomePage;
