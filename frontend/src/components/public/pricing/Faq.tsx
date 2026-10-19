import SectionLayout from "../SectionLayout.tsx";
import { PRICING_FAQ } from "../../../data/faqData.tsx";
import FaqItem from "./FaqItem.tsx";

function Faq() {
  return (
    <SectionLayout
      eyebrowText={"FAQ"}
      title={"Frequently Asked Questions"}
      content={
        <>
          {PRICING_FAQ.map((faqQuestion) => (
            <FaqItem
              question={faqQuestion.question}
              answer={faqQuestion.answer}
            />
          ))}
        </>
      }
      contentType={"grid-2"}
    />
  );
}

export default Faq;
