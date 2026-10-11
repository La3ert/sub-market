import SectionLayout from "../SectionLayout.tsx";
import FeatureCard from "../../shared/FeatureCard.tsx";

const USER_BENEFITS = [
  {
    id: "wide-selection",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17.0392 15.6244C18.2714 14.084 19.0082 12.1301 19.0082 10.0041C19.0082 5.03127 14.9769 1 10.0041 1C5.03127 1 1 5.03127 1 10.0041C1 14.9769 5.03127 19.0082 10.0041 19.0082C12.1301 19.0082 14.084 18.2714 15.6244 17.0392L21.2921 22.707C21.6828 23.0977 22.3163 23.0977 22.707 22.707C23.0977 22.3163 23.0977 21.6828 22.707 21.2921L17.0392 15.6244ZM10.0041 17.0173C6.1308 17.0173 2.99087 13.8774 2.99087 10.0041C2.99087 6.1308 6.1308 2.99087 10.0041 2.99087C13.8774 2.99087 17.0173 6.1308 17.0173 10.0041C17.0173 13.8774 13.8774 17.0173 10.0041 17.0173Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Wide Selection",
    description:
      "Explore hundreds of trusted companies and subscription plans across various categories.",
  },
  {
    id: "secure",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="1"
          d="M3 10.4167C3 7.21907 3 5.62028 3.37752 5.08241C3.75503 4.54454 5.25832 4.02996 8.26491 3.00079L8.83772 2.80472C10.405 2.26824 11.1886 2 12 2C12.8114 2 13.595 2.26824 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C21 5.62028 21 7.21907 21 10.4167C21 10.8996 21 11.4234 21 11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.38 21.8424 13.0193 22 12 22C10.9807 22 10.62 21.8424 9.89856 21.5273C7.23896 20.3655 3 17.6294 3 11.9914C3 11.4234 3 10.8996 3 10.4167Z"
          stroke="currentColor"
          stroke-width="2"
        />
        <path
          d="M9.5 12.4L10.9286 14L14.5 10"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Secure & Reliable",
    description:
      "We verify companies and ensure secure payments for your peace of mind.",
  },
  {
    id: "flexible",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18.605 2.022v0zM18.605 2.022l-2.256 11.856 8.174 0.027-11.127 16.072 2.257-13.043-8.174-0.029zM18.606 0.023c-0.054 0-0.108 0.002-0.161 0.006-0.353 0.028-0.587 0.147-0.864 0.333-0.154 0.102-0.295 0.228-0.419 0.373-0.037 0.043-0.071 0.088-0.103 0.134l-11.207 14.832c-0.442 0.607-0.508 1.407-0.168 2.076s1.026 1.093 1.779 1.099l5.773 0.042-1.815 10.694c-0.172 0.919 0.318 1.835 1.18 2.204 0.257 0.11 0.527 0.163 0.793 0.163 0.629 0 1.145-0.294 1.533-0.825l11.22-16.072c0.442-0.607 0.507-1.408 0.168-2.076-0.34-0.669-1.026-1.093-1.779-1.098l-5.773-0.010 1.796-9.402c0.038-0.151 0.057-0.308 0.057-0.47 0-1.082-0.861-1.964-1.939-1.999-0.024-0.001-0.047-0.001-0.071-0.001v0z"></path>
      </svg>
    ),
    title: "Flexible Plans",
    description: "Choose monthly or yearly subscriptions and cancel anytime.",
  },
  {
    id: "account",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    title: "Personal Account",
    description:
      "Manage your subscriptions, track billing dates, and get support whenever you need it.",
  },
];

function Benefits() {
  return (
    <SectionLayout
      eyebrowText={"YOUR BENEFITS"}
      title={"Why Choose SubMarket?"}
      subtitle={
        "A simple and secure way to find and manage the subscriptions you need - from the best companies, all in one place."
      }
      content={
        <>
          {USER_BENEFITS.map((benefit) => (
            <FeatureCard
              key={benefit.id}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </>
      }
      contentType={"default"}
    />
  );
}

export default Benefits;
