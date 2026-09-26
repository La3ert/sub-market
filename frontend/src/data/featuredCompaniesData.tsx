import type { ReactNode } from "react";

export interface CompanyData {
  id: string;
  logo: ReactNode;
  name: string;
  category: string;
  rating: number;
  reviews: number;
}

export const FEATURED_COMPANIES: CompanyData[] = [
  {
    id: "acme-saas",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="acmeGradient"
            x1="8"
            y1="38"
            x2="36"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#60A5FA" />
          </linearGradient>
        </defs>

        <path
          d="M4 38L18.5 10C19.1 8.8 20.9 8.8 21.5 10L27.5 21.8L22.5 32L18.8 24.7L12.6 38H4Z"
          fill="url(#acmeGradient)"
        />

        <path
          d="M22.5 32L29.4 19.2C30 18.1 31.7 18.1 32.3 19.2L42 38H29.1L22.5 32Z"
          fill="#38BDF8"
          opacity="0.9"
        />

        <path d="M17.2 38L21.6 29.2L26.6 38H17.2Z" fill="#BFDBFE" />
      </svg>
    ),
    name: "Acme SaaS",
    category: "Business Software",
    rating: 4.8,
    reviews: 124,
  },

  {
    id: "fitlife",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="fitLifeGradient"
            x1="9"
            y1="39"
            x2="39"
            y2="8"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#4ADE80" />
          </linearGradient>
        </defs>

        <path
          d="M11 38C9.8 30.4 12.4 22.2 18.2 16.3C24.2 10.2 31.4 8.7 39 9C39.3 16.8 37.5 24.2 31.7 30C26 35.8 18.4 38.8 11 38Z"
          fill="url(#fitLifeGradient)"
        />

        <path
          d="M10.5 38.5C17.2 29.9 25.8 22 36.4 14.1"
          stroke="#ECFDF5"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.95"
        />

        <path
          d="M16.5 34.5C21.1 29.5 27.2 24.4 33.8 19.7"
          stroke="#047857"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
    ),
    name: "FitLife",
    category: "Health & Fitness",
    rating: 4.7,
    reviews: 98,
  },

  {
    id: "creativepro",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="creativeGradient"
            x1="8"
            y1="12"
            x2="38"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F59E0B" />
            <stop offset="0.33" stopColor="#F43F5E" />
            <stop offset="0.66" stopColor="#D946EF" />
            <stop offset="1" stopColor="#6366F1" />
          </linearGradient>
        </defs>

        <path
          d="M35.5 13.2C31.9 9.6 27.5 8 22.7 8C13.4 8 7 15 7 24C7 33 13.4 40 22.7 40C27.5 40 31.9 38.4 35.5 34.8"
          stroke="url(#creativeGradient)"
          strokeWidth="7"
          strokeLinecap="round"
        />

        <path
          d="M15 15.5C16.8 13.8 19.2 12.8 22 12.8"
          stroke="#FB7185"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.7"
        />

        <path
          d="M15 32.5C16.8 34.2 19.2 35.2 22 35.2"
          stroke="#8B5CF6"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </svg>
    ),
    name: "CreativePro",
    category: "Design Tools",
    rating: 4.6,
    reviews: 76,
  },

  {
    id: "eduplus",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="eduGradient"
            x1="8"
            y1="14"
            x2="40"
            y2="36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2563EB" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <path d="M6 15L24 7L42 15L24 23L6 15Z" fill="url(#eduGradient)" />

        <path
          d="M11 18V26.5C11 26.5 16.7 34 24 34C31.3 34 37 26.5 37 26.5V18"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M42 15V27"
          stroke="#1D4ED8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        <path
          d="M42 27C40.3 27 39 28.3 39 30C39 31.7 40.3 33 42 33C43.7 33 45 31.7 45 30C45 28.3 43.7 27 42 27Z"
          fill="#2563EB"
        />
      </svg>
    ),
    name: "EduPlus",
    category: "Online Education",
    rating: 4.5,
    reviews: 62,
  },

  {
    id: "cloudhost",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="cloudGradient"
            x1="9"
            y1="11"
            x2="37"
            y2="37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38BDF8" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        <path
          d="M14 37H35.2C40.2 37 44 33.6 44 29C44 25.3 41.6 22.3 37.9 21.3C37 14.7 31.6 10 25 10C19.6 10 14.9 13.1 12.9 17.7C12.1 17.5 11.3 17.4 10.5 17.4C5.6 17.4 2 20.9 2 25.3C2 30 5.9 33.4 10.7 33.4H14"
          fill="url(#cloudGradient)"
        />

        <path
          d="M14 37H35.2"
          stroke="#1D4ED8"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.35"
        />
      </svg>
    ),
    name: "CloudHost",
    category: "Cloud Infrastructure",
    rating: 4.4,
    reviews: 48,
  },

  {
    id: "fintrack",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="finGradient"
            x1="9"
            y1="39"
            x2="39"
            y2="9"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#14B8A6" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <rect x="6" y="29" width="7" height="11" rx="2" fill="#14B8A6" />

        <rect x="16" y="23" width="7" height="17" rx="2" fill="#34D399" />

        <rect x="26" y="16" width="7" height="24" rx="2" fill="#22C55E" />

        <path
          d="M9 25L17.5 17L24 22.5L37.5 9"
          stroke="url(#finGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M33 9H37.5V13.5"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    name: "FinTrack",
    category: "Financial Services",
    rating: 4.9,
    reviews: 210,
  },

  {
    id: "mailmagic",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="mailGradient"
            x1="8"
            y1="12"
            x2="40"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#6D28D9" />
          </linearGradient>
        </defs>

        <path
          d="M5 18.5L42 7L27.5 41L20.5 27.2L5 18.5Z"
          fill="url(#mailGradient)"
        />

        <path
          d="M5 18.5L20.5 27.2L42 7"
          stroke="#C4B5FD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.8"
        />

        <path
          d="M20.5 27.2L27.5 41"
          stroke="#4C1D95"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    ),
    name: "MailMagic",
    category: "Marketing Automation",
    rating: 4.3,
    reviews: 145,
  },

  {
    id: "securenet",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="securityGradient"
            x1="10"
            y1="7"
            x2="38"
            y2="41"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF5A5F" />
            <stop offset="1" stopColor="#E11D48" />
          </linearGradient>
        </defs>

        <path
          d="M24 5L39 10.5V22.5C39 31.2 33.5 38.3 24 43C14.5 38.3 9 31.2 9 22.5V10.5L24 5Z"
          fill="url(#securityGradient)"
        />

        <path
          d="M16.5 24L21.5 29L32 18"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path d="M24 6V42" stroke="#BE123C" strokeWidth="1.3" opacity="0.28" />
      </svg>
    ),
    name: "SecureNet",
    category: "Cybersecurity",
    rating: 4.7,
    reviews: 305,
  },

  {
    id: "datasync",
    logo: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient
            id="dataGradient"
            x1="11"
            y1="11"
            x2="37"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#22D3EE" />
            <stop offset="1" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        <path
          d="M24 24L24 9M24 24L37 16.5M24 24L37 31.5M24 24L24 39M24 24L11 31.5M24 24L11 16.5"
          stroke="#06B6D4"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.9"
        />

        <circle cx="24" cy="24" r="8" fill="url(#dataGradient)" />

        <circle cx="24" cy="8" r="4" fill="#22D3EE" />
        <circle cx="38" cy="16" r="4" fill="#22D3EE" />
        <circle cx="38" cy="32" r="4" fill="#0EA5E9" />
        <circle cx="24" cy="40" r="4" fill="#0EA5E9" />
        <circle cx="10" cy="32" r="4" fill="#06B6D4" />
        <circle cx="10" cy="16" r="4" fill="#22D3EE" />
      </svg>
    ),
    name: "DataSync",
    category: "Cloud Storage",
    rating: 4.6,
    reviews: 89,
  },
];
