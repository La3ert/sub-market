import type { ReactNode } from "react";

export interface PricingPlan {
  id: string;
  icon: ReactNode;
  name: string;
  description: string;
  price: string;
  pricePeriod?: string;
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "outline";
  features: string[];
}

export interface ComparisonFeature {
  id: string;
  icon: ReactNode;
  name: string;
  starter: string | boolean;
  pro: string | boolean;
  scale: string | boolean;
  enterprise: string | boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M2.67 10.73a3.52 3.52 0 0 0-.94 1.93 5 5 0 0 0-.07 1.1v.58h.8a5.05 5.05 0 0 0 .88-.08 3.46 3.46 0 0 0 1.93-.94 1.76 1.76 0 0 0-.14-2.48 1.76 1.76 0 0 0-2.46-.11zm1.74 1.73a2.26 2.26 0 0 1-1.26.6h-.22v-.22a2.26 2.26 0 0 1 .6-1.26.36.36 0 0 1 .24-.08.67.67 0 0 1 .47.22.54.54 0 0 1 .17.74zM14.65 2.24a.91.91 0 0 0-.89-.89A8.75 8.75 0 0 0 7.27 3.5L5.64 5.4l-2.4-.5a1 1 0 0 0-.92.27l-.68.68a1 1 0 0 0-.28.81 1 1 0 0 0 .45.74l2.06 1.32.13.08 3.2 3.25.08.08 1.32 2.06a1 1 0 0 0 .74.45h.11a1 1 0 0 0 .7-.29l.68-.68a1 1 0 0 0 .27-.92l-.5-2.39 1.84-1.58a8.79 8.79 0 0 0 2.21-6.54zM3.11 6.15l1.32.28-.64.75-1-.67zm6.38 7.1-.67-1 .75-.64.28 1.32zm2.39-5.11.18.17zm-.28-.28L7.92 11 5 8.08 8.14 4.4a7.44 7.44 0 0 1 5.26-1.8 7.48 7.48 0 0 1-1.8 5.26z" />
        <path d="M11.13 6.63a1.19 1.19 0 0 0-.06-1.7 1.16 1.16 0 1 0-1.64 1.63 1.2 1.2 0 0 0 1.7.07z" />
      </svg>
    ),
    name: "Starter",
    description: "Perfect for small businesses just getting started.",
    price: "$50",
    pricePeriod: "/ month",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      "Up to 100 active clients",
      "1.5% transaction fee",
      "Basic analytics",
      "Email support (48h)",
    ],
  },
  {
    id: "pro",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M6.3375 19C5.815 19 5.33219 18.7141 5.07094 18.25C4.80969 17.7859 4.80969 17.2141 5.07094 16.75C5.33219 16.2859 5.815 16 6.3375 16H17.0625C17.8702 16 18.525 16.6716 18.525 17.5C18.525 18.3284 17.8702 19 17.0625 19H6.3375Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.875 8C6.10837 10.228 8.83837 13.569 11.7 8C14.5616 13.569 17.2916 10.228 18.525 8L17.16 16H6.24L4.875 8Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.7 8C10.8923 8 10.2375 7.32843 10.2375 6.5C10.2375 5.67157 10.8923 5 11.7 5C12.5078 5 13.1625 5.67157 13.1625 6.5C13.1625 6.89782 13.0085 7.27936 12.7342 7.56066C12.4599 7.84196 12.0879 8 11.7 8Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M18.525 8C17.9866 8 17.55 7.55228 17.55 7C17.55 6.44772 17.9866 6 18.525 6C19.0635 6 19.5 6.44772 19.5 7C19.5 7.26522 19.3973 7.51957 19.2145 7.70711C19.0316 7.89464 18.7836 8 18.525 8Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.87502 8C4.33655 8 3.90002 7.55228 3.90002 7C3.90002 6.44772 4.33655 6 4.87502 6C5.4135 6 5.85002 6.44772 5.85002 7C5.85002 7.26522 5.7473 7.51957 5.56445 7.70711C5.38161 7.89464 5.13361 8 4.87502 8Z"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    name: "Pro",
    description: "For growing businesses with more customers and features.",
    price: "$1,000",
    pricePeriod: "/ month",
    isPopular: true,
    buttonText: "Get Started",
    buttonVariant: "primary",
    features: [
      "Up to 1,000 active clients",
      "0.5% transaction fee",
      "Advanced analytics & reports",
      "Priority support (24/7)",
      "API access",
    ],
  },
  {
    id: "scale",
    icon: (
      <svg viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M14 15v-11h-3v-3h-9v14h-2v1h7v-3h2v3h7v-1h-2zM6 11h-2v-2h2v2zM6 8h-2v-2h2v2zM6 5h-2v-2h2v2zM9 11h-2v-2h2v2zM9 8h-2v-2h2v2zM9 5h-2v-2h2v2zM13 11h-2v-2h2v2zM13 8h-2v-2h2v2z"
        ></path>
      </svg>
    ),
    name: "Scale",
    description: "For established businesses with high volume.",
    price: "$2,000",
    pricePeriod: "/ month",
    buttonText: "Get Started",
    buttonVariant: "outline",
    features: [
      "Up to 10,000 active clients",
      "0% transaction fee",
      "Advanced analytics & reports",
      "Dedicated account manager",
      "Full API access",
    ],
  },
  {
    id: "enterprise",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21.091 6.97953C20.241 6.03953 18.821 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.85953 7.48101 5.52953V5.57953H7.24101C5.17101 5.57953 3.76101 6.04953 2.91101 6.98953C1.92101 8.08953 1.95101 9.56953 2.05101 10.5795L2.06101 10.6495L2.13847 11.4628C2.15273 11.6126 2.2334 11.7479 2.35929 11.8303C2.59909 11.9872 3.00044 12.2459 3.24101 12.3795C3.38101 12.4695 3.53101 12.5495 3.68101 12.6295C5.39101 13.5695 7.27101 14.1995 9.18101 14.5095C9.27101 15.4495 9.68101 16.5495 11.871 16.5495C14.061 16.5495 14.491 15.4595 14.561 14.4895C16.601 14.1595 18.571 13.4495 20.351 12.4095C20.411 12.3795 20.451 12.3495 20.501 12.3195C20.8977 12.0953 21.3093 11.819 21.6845 11.5484C21.7975 11.4668 21.8698 11.3408 21.8852 11.2023L21.901 11.0595L21.951 10.5895C21.961 10.5295 21.961 10.4795 21.971 10.4095C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM13.091 13.8295C13.091 14.8895 13.091 15.0495 11.861 15.0495C10.631 15.0495 10.631 14.8595 10.631 13.8395V12.5795H13.091V13.8295ZM8.91101 5.56953V5.52953C8.91101 3.82953 8.91101 3.19953 11.241 3.19953H12.761C15.091 3.19953 15.091 3.83953 15.091 5.52953V5.57953H8.91101V5.56953Z"
          fill="currentColor"
        />
        <path
          d="M20.8733 13.7349C21.2269 13.5666 21.6342 13.8469 21.5988 14.2369L21.2398 18.1907C21.0298 20.1907 20.2098 22.2307 15.8098 22.2307H8.18984C3.78984 22.2307 2.96984 20.1907 2.75984 18.2007L2.41913 14.4529C2.38409 14.0674 2.78205 13.7874 3.13468 13.947C4.2741 14.4625 6.37724 15.3771 7.67641 15.7174C7.84072 15.7604 7.97361 15.878 8.04556 16.0319C8.65253 17.33 9.96896 18.0207 11.8698 18.0207C13.752 18.0207 15.085 17.3034 15.694 16.0021C15.766 15.8481 15.8991 15.7305 16.0635 15.6873C17.443 15.3243 19.6816 14.3019 20.8733 13.7349Z"
          fill="currentColor"
        />
      </svg>
    ),
    name: "Enterprise",
    description: "Custom solutions for large enterprises with unique needs.",
    price: "Custom",
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    features: [
      "Unlimited clients",
      "Custom transaction rates",
      "White-label solution",
      "Dedicated infrastructure",
      "SLA & onboarding support",
    ],
  },
];

export const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    id: "monthly-price",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M14.8 8.5C14.1 7.8 13.1 7.5 12 7.5C10.5 7.5 9.3 8.3 9.3 9.5C9.3 10.8 10.5 11.3 12.2 11.8C13.8 12.3 14.8 12.9 14.8 14.1C14.8 15.5 13.5 16.5 11.8 16.5C10.5 16.5 9.4 16 8.6 15.2M12 5.8V18.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Monthly price",
    starter: "$50",
    pro: "$1,000",
    scale: "$2,000",
    enterprise: "Custom",
  },

  {
    id: "transaction-fee",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 5L5 19"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="7" cy="7" r="2.8" stroke="currentColor" strokeWidth="1.8" />
        <circle
          cx="17"
          cy="17"
          r="2.8"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    name: "Transaction fee",
    starter: "1.5%",
    pro: "0.5%",
    scale: "0%",
    enterprise: "Custom",
  },

  {
    id: "active-clients",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="3.2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M2.5 19V17.5C2.5 14.7 4.7 12.5 7.5 12.5H10.5C13.3 12.5 15.5 14.7 15.5 17.5V19H2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M15 4.2C16.8 4.6 18 6.1 18 8C18 9.9 16.8 11.4 15 11.8M17 13C19.5 13.6 21 15.4 21 18V19H18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Active clients limit",
    starter: "Up to 100",
    pro: "Up to 1,000",
    scale: "Up to 10,000",
    enterprise: "Unlimited",
  },

  {
    id: "analytics",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 20H21"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="4"
          y="13"
          width="4"
          height="7"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="10"
          y="8"
          width="4"
          height="12"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="16"
          y="4"
          width="4"
          height="16"
          rx="1"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    ),
    name: "Analytics & reports",
    starter: true,
    pro: true,
    scale: true,
    enterprise: true,
  },

  {
    id: "api-access",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 6L2.5 12L8 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 6L21.5 12L16 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 4L10 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "API access",
    starter: false,
    pro: true,
    scale: true,
    enterprise: true,
  },

  {
    id: "support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 13V11C3 6 7 2.5 12 2.5C17 2.5 21 6 21 11V13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="2"
          y="11"
          width="4"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <rect
          x="18"
          y="11"
          width="4"
          height="7"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M20 18C19.5 20 17.5 21 15 21H13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <rect
          x="10"
          y="19"
          width="4"
          height="3"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    name: "Priority support",
    starter: "Email (48h)",
    pro: "24/7 (chat + email)",
    scale: "24/7 (chat + phone)",
    enterprise: "24/7 (dedicated)",
  },

  {
    id: "white-label",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 3C6.5 3 3 6.8 3 12C3 17 6.7 21 11.5 21H13C14.4 21 15.5 19.9 15.5 18.5C15.5 17.5 14.8 16.8 14.8 15.8C14.8 14.8 15.7 14 16.8 14H18C20 14 21 12.8 21 10.5C21 6.2 17.1 3 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="10" r="1.1" fill="currentColor" />
        <circle cx="10" cy="6.8" r="1.1" fill="currentColor" />
        <circle cx="14" cy="6.8" r="1.1" fill="currentColor" />
        <circle cx="17.5" cy="9.5" r="1.1" fill="currentColor" />
      </svg>
    ),
    name: "White-label solution",
    starter: false,
    pro: false,
    scale: false,
    enterprise: true,
  },

  {
    id: "account-manager",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3.5 21V19C3.5 15.7 6.2 13 9.5 13H14.5C17.8 13 20.5 15.7 20.5 19V21H3.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Dedicated account manager",
    starter: false,
    pro: false,
    scale: false,
    enterprise: true,
  },

  {
    id: "onboarding",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2.5L15 8.6L21.7 9.6L16.8 14.3L18 21L12 17.8L6 21L7.2 14.3L2.3 9.6L9 8.6L12 2.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Custom onboarding",
    starter: false,
    pro: false,
    scale: false,
    enterprise: true,
  },
];
