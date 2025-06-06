import styles from '@/Css/Header.Module.css';
import { Globals } from '@/globals';
import { Link } from 'react-router-dom';
import { useHeaderUtils } from '@/Pages/utils/HeaderUtils';
function Header() {
    const { mainPageRoute, switchLanguage } = useHeaderUtils();
    return (
        <header>
            <div className={styles.headerWrapper} id='header'>
                <div className={styles.logo}>
                    <Link className={styles.navLink} onClick={(e) => mainPageRoute(e)} to='#'>
                        <img src={Globals.logo} alt="apetiti logo"></img>
                    </Link>
                </div>
                <nav>
                    <ul className={styles.navLinks}>
                        <li className={styles.navLink}><a data-translate="main" href="#">მთავარი</a></li>
                        <li className={styles.navLink}><a data-translate="aboutUs" href="#">ჩვენ შესახებ</a></li>
                        <li className={styles.navLink + ' ' + styles.dropDown}>
                            <a data-translate="services" href="#">სერვისები</a>
                            <ul className={styles.dropDownContent}>
                                <li className={styles.dropDownLink}><a data-translate="buffet" href="#" >ფურშეტის მომსახურება</a></li>
                                <li className={styles.dropDownLink}><a data-translate="corporateBuffet" href="#" >კომპანიების კვება</a></li>
                                <li className={styles.dropDownLink}><a data-translate="delivery" href="#" >საკურიერო მომსახურება</a></li>
                            </ul>
                        </li>
                        <li className={styles.navLink}><a data-translate="cafe" href="#">კაფე</a></li>
                        <li className={styles.navLink}><a data-translate="contact" href="#">კონტაქტი</a></li>
                    </ul>
                </nav>
                <div className={styles['language-switch']}>
                    <Link onClick={(e) => switchLanguage(e)} to="#" className={styles.en}>English</Link>
                </div>
            </div>
        </header>
    );
};

export default Header