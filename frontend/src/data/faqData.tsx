export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const PRICING_FAQ: FAQItem[] = [
  {
    id: "exceed-limit",
    question: "What happens if I exceed my client limit?",
    answer:
      "If you exceed your active client limit, your service won't be interrupted. We will notify you and give you a grace period to upgrade to the next tier that fits your growing business.",
  },
  {
    id: "setup-fee",
    question: "Is there a setup fee?",
    answer:
      "No, there are absolutely no setup fees, hidden charges, or cancellation fees. You only pay the flat monthly or annual rate for your chosen plan.",
  },
  {
    id: "change-plan",
    question: "Can I change my plan later?",
    answer:
      "Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your personal account dashboard. Prorated charges or credits will be applied automatically.",
  },
  {
    id: "free-trial",
    question: "Do you offer a free trial?",
    answer:
      "Yes, we offer a 14-day free trial on our Starter and Pro plans. You get full access to all features so you can test the platform before making a commitment.",
  },
];
