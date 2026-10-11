import type { ReactNode } from "react";

export interface CategoryData {
  id: string;
  icon: ReactNode;
  name: string;
  companiesCount: number;
}

export const POPULAR_CATEGORIES: CategoryData[] = [
  {
    id: "design-tools",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="designGradient"
            x1="8"
            y1="8"
            x2="39"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path
          d="M24 5C13 5 5 13.2 5 24C5 34.4 12.5 42 22.5 42H25.5C29.1 42 31.5 39.5 31.5 36.5C31.5 34.4 30 32.8 30 30.8C30 28.7 31.8 27 34 27H37C41 27 43 24.2 43 20C43 11.2 34.5 5 24 5Z"
          fill="url(#designGradient)"
        />
        <circle cx="15" cy="21" r="3" fill="#DBEAFE" />
        <circle cx="21" cy="13.5" r="3" fill="#DBEAFE" />
        <circle cx="29" cy="13.5" r="3" fill="#DBEAFE" />
        <circle cx="35" cy="20" r="3" fill="#DBEAFE" />
      </svg>
    ),
    name: "Design Tools",
    companiesCount: 48,
  },

  {
    id: "productivity",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="productivityGradient"
            x1="9"
            y1="7"
            x2="39"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <rect
          x="6"
          y="6"
          width="36"
          height="36"
          rx="10"
          fill="url(#productivityGradient)"
        />
        <path
          d="M14.5 24.5L21 31L34 17.5"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 11H37"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.2"
        />
      </svg>
    ),
    name: "Productivity",
    companiesCount: 72,
  },

  {
    id: "education",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="educationGradient"
            x1="6"
            y1="9"
            x2="41"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#1D4ED8" />
          </linearGradient>
        </defs>
        <path d="M3 17L24 7L45 17L24 28L3 17Z" fill="url(#educationGradient)" />
        <path
          d="M10 21V29C10 29 16 36 24 36C32 36 38 29 38 29V21"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 18V29"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M44 29C41.8 29 40.5 30.5 40.5 32.5C40.5 34.5 41.8 36 44 36C46.2 36 47.5 34.5 47.5 32.5C47.5 30.5 46.2 29 44 29Z"
          fill="#3B82F6"
        />
      </svg>
    ),
    name: "Education",
    companiesCount: 36,
  },

  {
    id: "health-fitness",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="healthGradient"
            x1="5"
            y1="6"
            x2="43"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB7185" />
            <stop offset="1" stopColor="#C026D3" />
          </linearGradient>
        </defs>
        <path
          d="M24 41C20 37.5 5 27 5 17C5 10 10 6 16 6C20 6 23 8.5 24 11C25 8.5 28 6 32 6C38 6 43 10 43 17C43 27 28 37.5 24 41Z"
          fill="url(#healthGradient)"
        />
        <path
          d="M9 23H16L20 16L25 29L29 21L32 23H39"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Health & Fitness",
    companiesCount: 41,
  },

  {
    id: "business",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="businessGradient"
            x1="7"
            y1="8"
            x2="41"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="14"
          width="38"
          height="27"
          rx="5"
          fill="url(#businessGradient)"
        />
        <path
          d="M17 14V10C17 8.3 18.3 7 20 7H28C29.7 7 31 8.3 31 10V14"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M5 23H43" stroke="white" strokeWidth="2" opacity="0.65" />
        <path d="M20 23V27H28V23" fill="#DBEAFE" />
        <path d="M5 23H43" stroke="#BFDBFE" strokeWidth="1.5" />
      </svg>
    ),
    name: "Business",
    companiesCount: 58,
  },

  {
    id: "development",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="developmentGradient"
            x1="7"
            y1="8"
            x2="41"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#0D9488" />
          </linearGradient>
        </defs>
        <path
          d="M17 12L7 24L17 36"
          stroke="url(#developmentGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M31 12L41 24L31 36"
          stroke="url(#developmentGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27 9L21 39"
          stroke="#14B8A6"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Development",
    companiesCount: 63,
  },

  {
    id: "marketing",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="marketingGradient"
            x1="7"
            y1="7"
            x2="41"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <path
          d="M6 20V28H13L34 37V11L13 20H6Z"
          fill="url(#marketingGradient)"
        />
        <path
          d="M13 28L18 40H25L21 31"
          fill="#8B5CF6"
          stroke="#7C3AED"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M38 17L43 13M39 24H46M38 31L43 35"
          stroke="#8B5CF6"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M14 21V27" stroke="#DDD6FE" strokeWidth="2" />
      </svg>
    ),
    name: "Marketing",
    companiesCount: 84,
  },

  {
    id: "finance",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="financeGradient"
            x1="8"
            y1="6"
            x2="40"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#34D399" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="18" fill="url(#financeGradient)" />
        <path
          d="M29.5 16.5C28 14.8 26.2 14 23.8 14C20.8 14 18.5 15.8 18.5 18.2C18.5 20.8 20.8 21.8 24 22.7C27.3 23.6 29.5 24.7 29.5 27.5C29.5 30.3 26.9 32.5 23.5 32.5C20.7 32.5 18.4 31.4 16.5 29.5"
          stroke="white"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M24 10V37"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
    ),
    name: "Finance & Accounting",
    companiesCount: 52,
  },

  {
    id: "customer-support",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="supportGradient"
            x1="7"
            y1="8"
            x2="41"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#60A5FA" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path
          d="M7 25V22C7 12.6 14.6 5 24 5C33.4 5 41 12.6 41 22V25"
          stroke="url(#supportGradient)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="22"
          width="9"
          height="15"
          rx="4.5"
          fill="url(#supportGradient)"
        />
        <rect
          x="34"
          y="22"
          width="9"
          height="15"
          rx="4.5"
          fill="url(#supportGradient)"
        />
        <path
          d="M38 36C36 40 32 42 26 42H23"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <rect x="19" y="38" width="8" height="5" rx="2.5" fill="#3B82F6" />
      </svg>
    ),
    name: "Customer Support",
    companiesCount: 45,
  },

  {
    id: "hr",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="hrGradient"
            x1="5"
            y1="6"
            x2="43"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#818CF8" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="15" r="8" fill="url(#hrGradient)" />
        <circle cx="10" cy="20" r="6" fill="#A5B4FC" />
        <circle cx="38" cy="20" r="6" fill="#A5B4FC" />
        <path
          d="M9 40C9 31.7 15.7 26 24 26C32.3 26 39 31.7 39 40V42H9V40Z"
          fill="url(#hrGradient)"
        />
        <path
          d="M2 39C2 33 5.5 29 11 29C13 29 14.5 29.5 16 30.5"
          stroke="#818CF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M46 39C46 33 42.5 29 37 29C35 29 33.5 29.5 32 30.5"
          stroke="#818CF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Human Resources",
    companiesCount: 39,
  },

  {
    id: "ecommerce",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="ecommerceGradient"
            x1="6"
            y1="9"
            x2="42"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path d="M9 16H39L42 40H6L9 16Z" fill="url(#ecommerceGradient)" />
        <path
          d="M17 18V13C17 9 19.8 6 24 6C28.2 6 31 9 31 13V18"
          stroke="#2563EB"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M16 26H32"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
      </svg>
    ),
    name: "E-commerce",
    companiesCount: 91,
  },

  {
    id: "analytics",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="analyticsGradient"
            x1="7"
            y1="9"
            x2="40"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path
          d="M6 40V8"
          stroke="#64748B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M6 40H43"
          stroke="#64748B"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="12" y="25" width="6" height="15" rx="2" fill="#38BDF8" />
        <rect x="22" y="17" width="6" height="23" rx="2" fill="#60A5FA" />
        <rect x="32" y="10" width="6" height="30" rx="2" fill="#2563EB" />
        <path
          d="M12 20L21 13L28 16L39 6"
          stroke="url(#analyticsGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33 6H39V12"
          stroke="#2563EB"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "Analytics & Data",
    companiesCount: 67,
  },

  {
    id: "cyber-security",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="securityGradient"
            x1="7"
            y1="5"
            x2="42"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FB7185" />
            <stop offset="1" stopColor="#DC2626" />
          </linearGradient>
        </defs>
        <path
          d="M24 4L40 10V22C40 31.5 33.8 39.2 24 44C14.2 39.2 8 31.5 8 22V10L24 4Z"
          fill="url(#securityGradient)"
        />
        <rect
          x="16"
          y="21"
          width="16"
          height="13"
          rx="3"
          stroke="white"
          strokeWidth="2.5"
        />
        <path
          d="M19 21V17C19 14.2 21.2 12 24 12C26.8 12 29 14.2 29 17V21"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="24" cy="27" r="1.7" fill="white" />
      </svg>
    ),
    name: "Cyber Security",
    companiesCount: 28,
  },

  {
    id: "legal",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="legalGradient"
            x1="7"
            y1="7"
            x2="41"
            y2="43"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>
        <path
          d="M24 6V39"
          stroke="url(#legalGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M12 13H36"
          stroke="#8B5CF6"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path d="M24 7L19 11H29L24 7Z" fill="#7C3AED" />
        <path
          d="M12 13L5 29H19L12 13Z"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M36 13L29 29H43L36 13Z"
          stroke="#7C3AED"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M5 29C5 33 19 33 19 29M29 29C29 33 43 33 43 29"
          stroke="#8B5CF6"
          strokeWidth="2"
        />
        <path
          d="M15 40H33"
          stroke="#7C3AED"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    ),
    name: "Legal Services",
    companiesCount: 15,
  },

  {
    id: "entertainment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="entertainmentGradient"
            x1="6"
            y1="6"
            x2="42"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F472B6" />
            <stop offset="1" stopColor="#9333EA" />
          </linearGradient>
        </defs>
        <rect
          x="5"
          y="5"
          width="38"
          height="38"
          rx="11"
          fill="url(#entertainmentGradient)"
        />
        <path
          d="M20 14.5C20 13.4 21.2 12.7 22.2 13.3L34 21.1C35 21.8 35 23.2 34 23.9L22.2 31.7C21.2 32.3 20 31.6 20 30.5V14.5Z"
          fill="white"
        />
        <path
          d="M11 10H37"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    ),
    name: "Entertainment",
    companiesCount: 104,
  },

  {
    id: "real-estate",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="realEstateGradient"
            x1="5"
            y1="7"
            x2="43"
            y2="42"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>
        <path
          d="M5 22L24 7L43 22"
          stroke="url(#realEstateGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M10 20V41H38V20" fill="url(#realEstateGradient)" />
        <rect x="19" y="27" width="10" height="14" rx="1.5" fill="#DBEAFE" />
        <rect x="13" y="24" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <rect x="30.5" y="24" width="4.5" height="5" rx="1" fill="#DBEAFE" />
        <path d="M24 27V41" stroke="#93C5FD" strokeWidth="1.5" />
      </svg>
    ),
    name: "Real Estate",
    companiesCount: 22,
  },
];
