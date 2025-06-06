import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/Context/Context.jsx';

export function useHeaderUtils() {
    const { language, setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    function ifNewRouteSameScrollTop(pageName){
        let currPath = language === 'ka' ? '/ka/' + pageName : '/en/' + pageName;
        console.log(location.pathname, currPath)
            if (location.pathname === currPath || location.pathname === '/') {
                // ✅ Already on the page, just scroll
                const container = document.getElementsByClassName('bodyWrapperShade')[0];
                container.scrollTo({top: 0, behavior: 'smooth'});
                
                return [true, currPath];
            }
        return [false, currPath];
    }

    const samePageRoute = (e, pageName) => {
        e.preventDefault();
        let [isSame, currPath] = ifNewRouteSameScrollTop(pageName);
         
        console.log(isSame)
        if (!isSame) {
            navigate(currPath);
        }
    };

    const switchLanguage = (e) => {
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

    return { samePageRoute, switchLanguage };
}
