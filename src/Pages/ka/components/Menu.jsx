import styles from '@/Css/Menu.module.css';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";
import { useState, useRef, useEffect } from 'react';
import tempPhoto from '@/assets/pics/kafe1.png'

function Menu() {
    const fading = SmoothScrolling();
    const [showFilters, setShowFilters] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(true);
    const cartRef = useRef(null);

    const categories = ["ყველა", "მეგრული", "ცხელი", "სუპები", "დესერტი"];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cartRef.current && !cartRef.current.contains(event.target)) {
                setShowCart(false);
                setShowCartIcon(true);
            }
        };

        if (showCart) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showCart]);

    return (
        <>
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
                    <div className={styles.circle} style={showCartIcon ? {opacity: 1} : {opacity: 0}} onClick={() => {setShowCart(!showCart); setShowCartIcon(!showCartIcon);}}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" version="1.1" className={styles.Capa_1} viewBox="0 0 902.86 902.86" xmlSpace="preserve">
                            <g>
                                <g>
                                    <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                    <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z"/>
                                </g>
                            </g>
                        </svg>
                    </div>
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
                            <div className={styles.itemOptions}>+</div>
                        </div>
                    </div>
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
            <div ref={cartRef} className={styles.cartWrapper} style={showCart ? {transform: 'translateY(0)'} : {transform: 'translateY(100%)'}}>
                <div className={styles.circle} onClick={() => {setShowCart(!showCart); setShowCartIcon(!showCartIcon);}}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" version="1.1" className={styles.Capa_1} viewBox="0 0 902.86 902.86" xmlSpace="preserve">
                        <g>
                            <g>
                                <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
        </>
    );
}
export default Menu;