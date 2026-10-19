import { useState } from "react";
import type { FAQItem as FAQItemType } from "../../../data/faqData.tsx";

type FaqItemProps = Omit<FAQItemType, "id">;

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="faq-item__header">
        <h3 className="faq-item__question">{question}</h3>
        <button className="faq-item__button" aria-label="Toggle answer">
          {isOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="faq-item__collapse">
        <div className="faq-item__body">
          <p className="faq-item__answer">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItem;
