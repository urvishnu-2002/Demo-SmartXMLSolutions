import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div key={pathname} className="animate-fadeUp">
            {children}
        </div>
    );
};

export default PageTransition;
