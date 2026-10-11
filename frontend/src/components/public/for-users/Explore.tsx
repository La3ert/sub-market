import SectionLayout from "../SectionLayout.tsx";
import useEmblaCarousel from "embla-carousel-react";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { POPULAR_CATEGORIES } from "../../../data/popularCategoriesData";
import ExploreCard from "./ExploreCard.tsx";

function Explore() {
  const [emblaRef] = useEmblaCarousel(
    { align: "start", loop: true, dragFree: true },
    [
      WheelGesturesPlugin({
        forceWheelAxis: "y",
      }),
    ],
  );

  return (
    <SectionLayout
      backgroundColor={"dark"}
      eyebrowText={"EXPLORE"}
      title={"Popular Categories"}
      subtitle={"Find subscriptions in the categories you care about most"}
      content={
        <div className="explore__viewport" ref={emblaRef}>
          <div className="explore__container">
            {POPULAR_CATEGORIES.map((category) => (
              <div className="explore__slide" key={category.id}>
                <ExploreCard {...category} />
              </div>
            ))}
          </div>
        </div>
      }
      contentType={"scroll"}
    />
  );
}

export default Explore;
