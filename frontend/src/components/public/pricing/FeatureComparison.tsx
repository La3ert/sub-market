import SectionLayout from "../SectionLayout.tsx";
import ComparisonTable from "./ComparisonTable.tsx";

function FeatureComparison() {
  return (
    <SectionLayout
      eyebrowText={"FEATURE COMPARISON"}
      backgroundColor={"dark"}
      title={"See What's Included"}
      subtitle={"Compare our plans and find the right git for your business."}
      content={<ComparisonTable />}
      contentType={"full"}
    />
  );
}

export default FeatureComparison;
