import styles from '@/Css/Menu.module.css';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";
import { useState } from 'react';
import tempPhoto from '@/assets/pics/kafe1.png'

function Menu() {
    const fading = SmoothScrolling();
    const [showFilters, setShowFilters] = useState(false);

    const categories = ["ყველა", "მეგრული", "ცხელი", "სუპები", "დესერტი"];
    return (
        <div className={styles.menuWrapper} ref={fading}> 
            <div className={styles.menuSearchBar}>
                <input type="text" placeholder="Search for items..." className={styles.searchInput} />
                <button className={styles.searchButton}>Search</button>
            </div>
            <div className={styles.filterWrapper}>
                <button className={styles.filterButton} style={showFilters ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowFilters(!showFilters)}>
                    Filters
                </button>
                <div className={`${styles.filterDropdown} ${showFilters ? styles.show : ''}`}>
                    {categories.map((category, index) => (
                    <div key={index} className={styles.filterItem}>
                        <input className={styles.menuCheckboxes} type="checkbox" id={`filter-${index}`} defaultChecked={!index} />
                        <label htmlFor={`filter-${index}`}>{category}</label>
                    </div>
                    ))}
                </div>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.item}>
                    <div className={styles.itemPhotoWrapper}>
                        <img src={tempPhoto} alt=""/>
                    </div>
                    <div className={styles.itemDescriptionWrapper}>
                        <div className={styles.itemDescription}></div>
                        <div className={styles.itemOptions}>+</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemPhotoWrapper}>
                        <img src={tempPhoto} alt=""/>
                    </div>
                    <div className={styles.itemDescriptionWrapper}>
                        <div className={styles.itemDescription}></div>
                        <div className={styles.itemOptions}></div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.itemPhotoWrapper}>
                        <img src={tempPhoto} alt=""/>
                    </div>
                    <div className={styles.itemDescriptionWrapper}>
                        <div className={styles.itemDescription}></div>
                        <div className={styles.itemOptions}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Menu;