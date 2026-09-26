import { Link } from "react-router-dom";

function Logo({ theme = "dark" }: { theme?: "light" | "dark" }) {
  return (
    <Link className={`logo logo--${theme}`} to="/">
      <img className="logo__img" src="/brand/logo-icon.svg" alt="logo" />
      SubMarket
    </Link>
  );
}

export default Logo;
