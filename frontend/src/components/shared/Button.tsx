import { type ReactNode, type ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
  to?: string;
  fullWidth?: boolean;
}

function Button({
  children,
  variant = "primary",
  to,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClass =
    `btn btn--${variant} ${fullWidth ? "btn--full-width" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={baseClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClass} {...props}>
      {children}
    </button>
  );
}

export default Button;
