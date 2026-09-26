import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'outline';
    to?: string;
    fullWidth?: boolean;
    className?: string;
    onClick?: () => void;
}

function Button({
                    children,
                    variant = 'primary',
                    to,
                    fullWidth = false,
                    className = '',
                    onClick
                }: ButtonProps) {
    const baseClass = `btn btn--${variant} ${fullWidth ? 'btn--full-width' : ''} ${className}`.trim();

    if (to) {
        return (
            <Link to={to} className={baseClass}>
                {children}
            </Link>
        );
    }

    return (
        <button className={baseClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;