import styles from '@/Css/Header.module.css'
import Globals from '@/globals.js'
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
        setLanguage(l => l = 'ka');
    }
    return (
        <header>
            <div className={styles.headerWrapper}>
                <div className={styles.logo}>
                    <Link className={styles.navLink} onClick={mainPageRoute}>
                        <img src={Globals.logo} alt="apetiti logo"></img>
                    </Link>
                </div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}><a data-translate="main" href="">Main</a></li>
                        <li className={styles.navLink}><a data-translate="aboutUs" href="#">About Us</a></li>
                        <li className={styles.navLink + ' ' + styles.dropDown}>
                            <a data-translate="services" href="#">Services</a>
                            <ul className={styles.dropDownContent}>
                                <li className={styles.dropDownLink}><a data-translate="buffet" href="#" >Buffet</a></li>
                                <li className={styles.dropDownLink}><a data-translate="corporateBuffet" href="#" >Corporate Buffet</a></li>
                                <li className={styles.dropDownLink}><a data-translate="delivery" href="#" >Delivery</a></li>
                            </ul>
                        </li>
                        <li className={styles.navLink}><a data-translate="cafe" href="#">Cafe</a></li>
                        <li className={styles.navLink}><a data-translate="contact" href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className={styles['language-switch']}>
                    <Link to={"/ka/Main"} className={styles.en} onClick={switchLanguage}>ქართული</Link>
                </div>
            </div>
        </header>
    );
};

export default Header