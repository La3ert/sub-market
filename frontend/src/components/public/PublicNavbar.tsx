import {NavLink} from "react-router-dom";

const PUBLIC_NAVIGATION_LINKS = [
    { path: '/', label: 'Home' },
    { path: '/for-business', label: 'For Business' },
    { path: '/for-users', label: 'For Users' },
    { path: '/explore', label: 'Explore' },
    { path: '/pricing', label: 'Pricing' },
];

function PublicNavbar({ variant = 'navbar'}: { variant?: 'navbar' | 'footer' }) {
    return (
        <nav className={`public-navbar__links public-navbar__links--${variant}`}>
            {PUBLIC_NAVIGATION_LINKS.map((link) => (
                <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                        isActive ? `public-navbar__link public-navbar__link--${variant} public-navbar__link--active` : `public-navbar__link public-navbar__link--${variant}`
                    }
                >
                    {link.label}
                </NavLink>
            ))}
        </nav>
    );
}

export default PublicNavbar;

