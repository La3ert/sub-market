import { COMPARISON_FEATURES } from "../../../data/pricingData.tsx";

function ComparisonTable() {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      if (value) {
        return (
          <svg
            className="comparison-table__check"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 6L9 17L4 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      }
      return <span className="comparison-table__dash">—</span>;
    }
    return <span className="comparison-table__text">{value}</span>;
  };

  return (
    <div className="comparison-table">
      <div className="comparison-table__header">
        <div className="comparison-table__cell comparison-table__cell--feature">
          Feature
        </div>
        <div className="comparison-table__cell">Starter</div>
        <div className="comparison-table__cell">Pro</div>
        <div className="comparison-table__cell">Scale</div>
        <div className="comparison-table__cell">Enterprise</div>
      </div>

      <div className="comparison-table__body">
        {COMPARISON_FEATURES.map((feature) => (
          <div className="comparison-table__row" key={feature.id}>
            <div className="comparison-table__cell comparison-table__cell--feature">
              <span className="comparison-table__icon">{feature.icon}</span>
              {feature.name}
            </div>
            <div className="comparison-table__cell comparison-table__cell--data">
              {renderCell(feature.starter)}
            </div>
            <div className="comparison-table__cell comparison-table__cell--data">
              {renderCell(feature.pro)}
            </div>
            <div className="comparison-table__cell comparison-table__cell--data">
              {renderCell(feature.scale)}
            </div>
            <div className="comparison-table__cell comparison-table__cell--data">
              {renderCell(feature.enterprise)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComparisonTable;
