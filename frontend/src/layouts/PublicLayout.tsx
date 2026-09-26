import PublicHeader from "../components/public/PublicHeader.tsx";
import { useAppSelector} from "../store/hooks.ts";
import {Outlet} from "react-router-dom";
import PublicFooter from "../components/public/PublicFooter.tsx";

function PublicLayout() {

    const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)

    return (
        <div className="public-layout">
            <PublicHeader isAuthenticated={isAuthenticated} />

            <main className="public-layout__main">
                <Outlet />
            </main>

            <PublicFooter />

        </div>
    );
}

export default PublicLayout;