import '@/Css/Header.Module.css'
import logo from '@/assets/logo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/Context/Context.jsx';

function Header() {
    const {language, setLanguage} = useLanguage();
    const navigate = useNavigate()
    const mainPageRoute = () => {
        console.log(language);
        language === 'ka' ? navigate('/ka/Main') : navigate('/en/Main');
    }
    const switchLanguage = () => {
        setLanguage(l => l = 'en');
    }
    return (
        <header>
            <div className="headerWrapper">
                <div className="logo">
                    <Link className = 'nav-link' onClick={mainPageRoute}>
                        <img src={logo} alt="apetiti logo"></img>
                    </Link>
                </div>
                <nav>
                    <ul className="navLinks">
                        <li className="navLink"><a data-translate="main" href="">მთავარი</a></li>
                        <li className="navLink"><a data-translate="aboutUs" href="#">ჩვენ შესახებ</a></li>
                        <li className="navLink dropDown">
                            <a data-translate="services" href="#">სერვისები</a>
                            <ul className="dropDownContent">
                                <li className="dropDownLink"><a data-translate="buffet" href="#" >ფურშეტის მომსახურება</a></li>
                                <li className="dropDownLink"><a data-translate="corporateBuffet" href="#" >კომპანიების კვება</a></li>
                                <li className="dropDownLink"><a data-translate="delivery" href="#" >საკურიერო მომსახურება</a></li>
                            </ul>
                        </li>
                        <li className="navLink"><a data-translate="cafe" href="#">კაფე</a></li>
                        <li className="navLink"><a data-translate="contact" href="#">კონტაქტი</a></li>
                    </ul>
                </nav>
                <div className="language-switch">
                    <Link to={"/en/Main"} onClick={switchLanguage} id='en'>English</Link>
                </div>
            </div>
        </header>
    );
};

export default Header