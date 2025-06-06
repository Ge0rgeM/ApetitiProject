// src/hooks/useHeaderActions.js
import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/Context/Context.jsx';

export function useHeaderUtils() {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();
    // const scrollOnNavigate = useRef(false); // flag to trigger scroll after route change
    // useEffect(() => {
    //     if (scrollOnNavigate.current) {
    //         window.scrollTo({ top: -0, behavior: 'smooth' });
    //         scrollOnNavigate.current = false;
    //     }
    // }, [location.pathname]);

const mainPageRoute = (e) => {
    e.preventDefault();
    let currPath = language === 'ka' ? '/ka/Main' : '/en/Main';

    if (location.pathname === currPath) {
        console.log(location.pathname, currPath)
        // ✅ Already on the page, just scroll
        const container = document.getElementsByClassName('bodyWrapperShade')[0];
        container.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        // ✅ Navigate and let natural scroll-to-top happen
        navigate(currPath);
    }
};

    const switchLanguage = (e) => {
        // scrollOnNavigate.current = true;
        e.preventDefault();

        let newPath = location.pathname;

        if (location.pathname === '/') {
            newPath = '/en/Main';
            setLanguage('en');
        } else {
            switch (language) {
                case 'en':
                    newPath = location.pathname.replace(/^\/en/, '/ka');
                    setLanguage('ka');
                    break;
                case 'ka':
                    newPath = location.pathname.replace(/^\/ka/, '/en');
                    setLanguage('en');
                    break;
                default:
                    newPath = '/ka/Main';
                    setLanguage('ka');
            }
        }

        navigate(newPath);
    };

    return { mainPageRoute, switchLanguage };
}
