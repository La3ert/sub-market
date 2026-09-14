import {useAppSelector} from "../store/hooks.ts";
import {Link} from "react-router-dom";

function Logo() {
    const role = useAppSelector((state) => state.auth.role);
    const themeModifier = role === 'SUPER_ADMIN'
        ? 'logo--light'
        : 'logo--dark';
    return (
        <>
            <Link  className={`logo ${themeModifier}`} to="/">
                <img className="logo__img" src="../../public/brand/logo-icon.svg" alt="logo" />
                SubMarket
            </Link>
        </>
    );
}

export default Logo;