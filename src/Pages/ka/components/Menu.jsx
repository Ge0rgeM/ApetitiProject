
import styles from '@/Css/Menu.module.css';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";
import { useState, useRef, useEffect } from 'react';
import { useSearching } from '@/Pages/utils/MenuUtils';
import CartLogo from './CartLogo';
function Menu() {
    const fading = SmoothScrolling();
    const [showFilters, setShowFilters] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showCartIcon, setShowCartIcon] = useState(true);
    const cartRef = useRef(null);
    const [query, setQuery] = useState('');
    const [checkedCategories, setCheckedCategories] = useState(['ყველა']);
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);
    const results = useSearching(query, checkedCategories);
    
    const categories = ["ყველა", "მეგრული კერძები შეფისგან", "ცხელი კერძები", "სუპები", "დესერტი"];
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
                    <input type="text" onChange={e => setQuery(q => q = e.target.value)} placeholder="Search for items..." className={styles.searchInput} />
                    {/* <button className={styles.searchButton}>Search</button> */}
                </div>
                <div className={styles.filterWrapper}>
                    <button className={styles.filterButton} style={showFilters ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 } : {}} onClick={() => setShowFilters(!showFilters)}>
                        Filters
                    </button>
                    <div className={`${styles.filterDropdown} ${showFilters ? styles.show : ''}`}>
                        {categories.map((category, index) => (
                        <div key={index} className={styles.filterItem}>
                            <input className={styles.menuCheckboxes} type="checkbox" id={`filter-${index}`} checked={checkedCategories.includes(category)} onChange={e => {
                                if (category === "ყველა") {
                                    setCheckedCategories(e.target.checked ? ["ყველა"] : []);
                                } else {
                                    setCheckedCategories(prev => {
                                    const withoutAll = prev.filter(c => c !== "ყველა");
                                    if (e.target.checked) {
                                        return [...withoutAll, category];
                                    } else {
                                        const updated = withoutAll.filter(c => c !== category);
                                        return updated.length === 0 ? ["ყველა"] : updated;
                                    }
                                });
                                }
                            }}/>
                            <label htmlFor={`filter-${index}`}>{category}</label>
                        </div>
                        ))}
                    </div>
                </div>
                <div className={styles.menuContainer}>
                    <CartLogo 
                        cartItems={cartItems} 
                        style={showCartIcon ? {opacity: 1} : {opacity: 0}} 
                        onClick={() => {setShowCart(!showCart); setShowCartIcon(!showCartIcon);}} 
                    />
                    {results.length > 0 ? results.map((item, index) => (
                    <div className={styles.item} key={index}>
                            <div className={styles.itemPhotoWrapper}>
                                <img src={item.photo_url} alt={item.name}/>
                            </div>
                        <div className={styles.itemDescriptionWrapper}>
                            <div className={styles.itemDescription}>{item.name}</div>
                            <div className={styles.itemOptions}>
                                <svg 
                                    onClick={() =>{
                                        const exists = cartItems.some(cartItem => cartItem.id === item.id);
                                        if (exists) {
                                            const updatedCart = cartItems.map(
                                                cartItem => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
                                            );
                                            setCartItems(updatedCart);
                                        } else {
                                            setCartItems([...cartItems, { id: item.id, name: item.name, quantity: 1, photo_url: item.photo_url }]);
                                        }
                                    }} 
                                    xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#FFFFFF" version="1.1" className={styles.Capa_1} viewBox="0 0 902.86 902.86" xmlSpace="preserve">
                                    <g>
                                        <g>
                                            <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z     M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z"/>
                                            <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717    c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744    c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742    C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744    c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z     M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742    S619.162,694.432,619.162,716.897z"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    )) : (
                        <div className={styles.noResults}>No results found</div>
                    )}
                </div>
            </div>
            <div ref={cartRef} className={styles.cartWrapper} style={showCart ? {transform: 'translateY(0)'} : {transform: 'translateY(110%)'}}>
                <CartLogo 
                    onClick={() => {setShowCart(!showCart); setShowCartIcon(!showCartIcon);}} 
                    cartItems={cartItems} 
                />
                <div className={styles.itemsScrollArea}>
                    {cartItems.length > 0 ? cartItems.map((item, index) => (
                    <div className={styles.item} key={index}>
                            <div className={styles.itemPhotoWrapper}>
                                <img src={item.photo_url} alt={item.name}/>
                            </div>
                        <div className={styles.itemDescriptionWrapper}>
                            <div className={styles.itemDescriptionCart}>{item.name}</div>
                            <div className={styles.itemOptionsCart}>
                                <div className={styles.increaseDecrease}>
                                    <div className={styles.increase} 
                                        onClick={() => {
                                            const updatedCart = cartItems.map((cartItem) =>
                                            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
                                            setCartItems(updatedCart);
                                        }}  
                                    >
                                        +
                                    </div>
                                    <div className={styles.quantity}>{item.quantity}</div>
                                    <div className={styles.decrease} 
                                        onClick={() => {
                                            const updatedCart = cartItems.map((cartItem) =>
                                            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
                                            setCartItems(updatedCart);
                                        }}
                                    >
                                        -
                                    </div>
                                </div>
                                <div className={styles.deleteCartItem}
                                        onClick={() => {
                                            const updatedCart = cartItems.filter(cartItem => cartItem.id !== item.id);
                                            setCartItems(updatedCart);
                                        }}
                                    >
                                        X
                                </div>
                            </div>
                        </div>
                    </div>
                    )) : (
                        <div className={styles.noResults}>No results found</div>
                    )}
                </div>
                <button>Send Order</button>
            </div>
        </>
    );
}
export default Menu;