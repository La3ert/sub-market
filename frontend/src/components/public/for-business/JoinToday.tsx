import Eyebrow from "../../shared/Eyebrow.tsx";
import Button from "../../shared/Button.tsx";
import img from "../../../assets/images/for-business/join-today-img.png";

function JoinToday() {
  return (
    <section className="join-today">
      <div className="container join-today__inner">
        <div className="join-today__content">
          <Eyebrow eyebrowText={"READY TO BUILD YOUR SUBSCRIPTION BUSINESS?"} />
          <h2 className="join-today__title">Join SubMarket Today</h2>
          <p className="join-today__description">
            Get your company approved and start offering subscriptions to a
            growing audience of customers.
          </p>
          <div className="join-today__buttons">
            <Button
              children={
                <>
                  Register your company
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </>
              }
            ></Button>

            <Button variant={"outline"} children={"Explore Pricing"}></Button>
          </div>
        </div>
        <div className="join-today__visual">
          <img className="join-today__image" src={img} alt={"join-today-img"} />
        </div>
      </div>
    </section>
  );
}

export default JoinToday;
