import styles from '@/Css/Header.Module.css';
import { Globals } from '@/globals';
import { Link } from 'react-router-dom';
import { useHeaderUtils } from '@/Pages/utils/HeaderUtils';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";

function Header() {
    const fading = SmoothScrolling();
    const { samePageRoute, switchLanguage } = useHeaderUtils();
    return (
        <header ref={fading}>
            <div className={styles.headerWrapper} id='header'>
                <div className={styles.logo}>
                    <Link className={styles.navLink} onClick={(e) => samePageRoute(e,'Main')} to='#'>
                        <img src={Globals.logo} alt="apetiti logo"></img>
                    </Link>
                </div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}><a data-translate="main" href="#"  onClick={(e) => samePageRoute(e, 'Main')}>მთავარი</a></li>
                        <li className={styles.navLink}><a data-translate="aboutUs" href="#" onClick={(e) => samePageRoute(e, 'AboutUs')}>ჩვენ შესახებ</a></li>
                        <li className={styles.navLink + ' ' + styles.dropDown}>
                            <a data-translate="services" href="#">სერვისები</a>
                            <ul className={styles.dropDownContent}>
                                <li className={styles.dropDownLink}><a data-translate="buffet" href="#" >ფურშეტის მომსახურება</a></li>
                                <li className={styles.dropDownLink}><a data-translate="corporateBuffet" href="#" >კომპანიების კვება</a></li>
                                {/* <li className={styles.dropDownLink}><a data-translate="delivery" href="#" >საკურიერო მომსახურება</a></li> */}
                            </ul>
                        </li>
                        <li className={styles.navLink}><a data-translate="delivery" href="#" onClick={(e) => samePageRoute(e, 'Delivery')}>საკურიერო მომსახურება</a></li>
                        <li className={styles.navLink}><a data-translate="contact" href='#' onClick={(e) => samePageRoute(e, 'Contact')}>კონტაქტი</a></li>
                    </ul>
                </nav>
                <div className={styles['language-switch']}>
                    <Link onClick={(e) => switchLanguage(e)} to="#" className={styles.en}>English</Link>
                </div>
                {/* <div className={styles['']}>
                    <Link >Login / Register</Link>
                </div> */}
            </div>
        </header>
    );
};

export default Header