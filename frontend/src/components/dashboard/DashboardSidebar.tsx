import Logo from "../shared/Logo.tsx";
import {NavLink} from "react-router-dom";


const NAVIGATION_LINKS = {
    SUPER_ADMIN: [
        { path: '/super-admin/dashboard', label: 'Dashboard' },
        { path: '/super-admin/merchants', label: 'Merchants' },
        { path: '/super-admin/billing', label: 'Billing' },
        { path: '/super-admin/settings', label: 'Settings' },
    ],
    MERCHANT_ADMIN: [
        { path: '/merchant/dashboard', label: 'Dashboard' },
        { path: '/merchant/plans', label: 'Plans' },
        { path: '/merchant/customers', label: 'Customers' },
        { path: '/merchant/invoices', label: 'Invoices ' },
        { path: '/merchant/analytics', label: 'Analytics' },
        { path: '/merchant/settings', label: 'Settings' },
        { path: '/merchant/team', label: 'Team' },
    ],
    MERCHANT_MANAGER: [
        { path: '/merchant/plans', label: 'Plans' },
        { path: '/merchant/customers', label: 'Customers' },
        { path: '/merchant/invoices', label: 'Invoices ' },
    ],
    CUSTOMER: []
};

type Role = 'SUPER_ADMIN' | 'MERCHANT_ADMIN' | 'MERCHANT_MANAGER' | 'CUSTOMER' | null;

function DashboardSidebar({ role }: { role: Role }) {
    const currentLinks = role ? NAVIGATION_LINKS[role] : [];

    const themeModifier = role === 'SUPER_ADMIN'
        ? 'sidebar--super-admin'
        : 'sidebar--merchant';

    const logoTheme = role === 'SUPER_ADMIN' ? 'light' : 'dark';

    return (
        <aside className={`sidebar ${themeModifier}`}>
            <Logo theme={logoTheme} />
            <nav className="sidebar__nav">
                {currentLinks.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar__link sidebar__link--active"
                                : "sidebar__link"
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
            <footer className="sidebar__footer">
                Footer
            </footer>
        </aside>
    );
}

export default DashboardSidebar;