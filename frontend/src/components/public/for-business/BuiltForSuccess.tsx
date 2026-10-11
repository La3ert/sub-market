import FeatureCard from "../../shared/FeatureCard.tsx";
import SectionLayout from "../SectionLayout.tsx";

const SUCCESS_CARDS = [
  {
    id: "storefront",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.5 21.9913V18.5C14.5 17.5654 14.5 17.0981 14.299 16.75C14.1674 16.522 13.978 16.3326 13.75 16.201C13.4019 16 12.9346 16 12 16C11.0654 16 10.5981 16 10.25 16.201C10.022 16.3326 9.83261 16.522 9.70096 16.75C9.5 17.0981 9.5 17.5654 9.5 18.5V21.9913H14.5Z"
          fill="currentColor"
        />
        <path
          opacity="0.5"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.73204 12C4.84126 12 4.05323 11.6239 3.5 11.0329V14C3.5 17.7712 3.5 19.6568 4.67157 20.8284C5.61466 21.7715 7.02043 21.9554 9.5 21.9913H14.5C16.9796 21.9554 18.3853 21.7715 19.3284 20.8284C20.5 19.6568 20.5 17.7712 20.5 14V11.034C19.9468 11.6244 19.1592 12 18.269 12C16.6973 12 15.3814 10.8091 15.225 9.24523L15.152 8.51733C15.3385 10.382 13.8742 12 12.0003 12C10.139 12 8.6819 10.4038 8.84499 8.55511L8.77598 9.24523C8.6196 10.8091 7.30367 12 5.73204 12ZM14.5 18.5V21.9913H9.5V18.5C9.5 17.5654 9.5 17.0981 9.70096 16.75C9.83261 16.522 10.022 16.3326 10.25 16.201C10.5981 16 11.0654 16 12 16C12.9346 16 13.4019 16 13.75 16.201C13.978 16.3326 14.1674 16.522 14.299 16.75C14.5 17.0981 14.5 17.5654 14.5 18.5Z"
          fill="currentColor"
        />
        <path
          d="M9.4998 2H14.4998L15.1515 8.51737C15.338 10.382 13.8737 12 11.9998 12C10.1259 12 8.6616 10.382 8.84806 8.51737L9.4998 2Z"
          fill="currentColor"
        />
        <path
          opacity="0.7"
          d="M3.33024 5.35133C3.50832 4.46093 3.59736 4.01573 3.7784 3.65484C4.15987 2.89439 4.84628 2.33168 5.66677 2.10675C6.05616 2 6.51017 2 7.4182 2H9.50051L8.77598 9.24527C8.6196 10.8091 7.30367 12 5.73204 12C3.80159 12 2.35373 10.2339 2.73232 8.34093L3.33024 5.35133Z"
          fill="currentColor"
        />
        <path
          opacity="0.7"
          d="M20.6703 5.35133C20.4922 4.46093 20.4031 4.01573 20.2221 3.65484C19.8406 2.89439 19.1542 2.33168 18.3337 2.10675C17.9443 2 17.4903 2 16.5823 2H14.5L15.2245 9.24527C15.3809 10.8091 16.6968 12 18.2685 12C20.1989 12 21.6468 10.2339 21.2682 8.34093L20.6703 5.35133Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Your Own Storefront",
    description:
      "Create a beautiful public page for your company with a custom logo, description and branding.",
  },
  {
    id: "flexible-plans",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2 11H22L22 15.0658C22.0001 15.9523 22.0001 16.7161 21.9179 17.3278C21.8297 17.9833 21.631 18.6117 21.1213 19.1213C20.6117 19.631 19.9833 19.8297 19.3278 19.9179C18.7161 20.0001 17.9523 20.0001 17.0658 20H6.93414C6.04767 20.0001 5.28387 20.0001 4.67221 19.9179C4.0167 19.8297 3.38835 19.631 2.87869 19.1213C2.36902 18.6117 2.17028 17.9833 2.08215 17.3278C1.99991 16.7161 1.99995 15.9523 2 15.0658L2 11ZM5 14C5 13.4477 5.44772 13 6 13H8C8.55228 13 9 13.4477 9 14C9 14.5523 8.55228 15 8 15H6C5.44772 15 5 14.5523 5 14ZM10 14C10 13.4477 10.4477 13 11 13H13C13.5523 13 14 13.4477 14 14C14 14.5523 13.5523 15 13 15H11C10.4477 15 10 14.5523 10 14Z"
          fill="currentColor"
        />
        <path
          d="M22 9.00001L22 8.93418C22.0001 8.04769 22.0001 7.28387 21.9179 6.67221C21.8297 6.0167 21.631 5.38835 21.1213 4.87869C20.6117 4.36902 19.9833 4.17028 19.3278 4.08215C18.7161 3.99991 17.9523 3.99995 17.0658 4L6.93418 4C6.04769 3.99995 5.28388 3.99991 4.67222 4.08215C4.0167 4.17028 3.38835 4.36902 2.87869 4.87868C2.36902 5.38835 2.17028 6.0167 2.08215 6.67221C1.99991 7.28388 1.99995 8.0477 2 8.9342L2 9L22 9.00001Z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Flexible Plans",
    description:
      "Offer multiple subscription plans with different prices and billing periods (monthly or yearly).",
  },
  {
    id: "analytics",
    icon: (
      <svg
        viewBox="-1 0 24 24"
        id="meteor-icon-kit__solid-analytics"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 13C4.65685 13 6 14.3431 6 16V21C6 22.6569 4.65685 24 3 24C1.34315 24 0 22.6569 0 21V16C0 14.3431 1.34315 13 3 13zM11 0C12.6569 0 14 1.34315 14 3V21C14 22.6569 12.6569 24 11 24C9.3431 24 8 22.6569 8 21V3C8 1.34315 9.3431 0 11 0zM19 7C20.6569 7 22 8.34315 22 10V21C22 22.6569 20.6569 24 19 24C17.3431 24 16 22.6569 16 21V10C16 8.34315 17.3431 7 19 7z"
          fill="currentColor"
        />
      </svg>
    ),
    title: "Real-Time Analytics",
    description:
      "Track new subscriptions, revenue (MRR), and customer behavior with intuitive charts.",
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
      "We handle payments, security, and infrastructure, so you can focus on what you do best.",
  },
];

function BuiltForSuccess() {
  return (
    <SectionLayout
      eyebrowText={"BUILT FOR YOUR SUCCESS"}
      title={"Everything You Need to Manage Your Subscription Business"}
      subtitle={
        "From storefront creation to detailed analytics, our platform " +
        "gives you the tools to attract customers, manage subscriptions, " +
        "and grow revenue."
      }
      content={
        <>
          {SUCCESS_CARDS.map((card) => (
            <FeatureCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
              linkText={"Learn more →"}
              linkUrl={"#"}
            />
          ))}
        </>
      }
      contentType={"default"}
    />
  );
}

export default BuiltForSuccess;
