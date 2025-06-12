import { useState } from 'react';
import styles from '@/Css/ContactUsForm.module.css';
import { isEmpty, isValidEmail, isValidPhone, isValidMessage, contactFormSubmit } from '@/Pages/utils/ContactUtils';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";

function ContactUsForm() {
    const [name, setName] = useState('');
    const [showNameError, setShowNameError] = useState(false);
    const [surname, setSurname] = useState('');
    const [showSurnameError, setShowSurnameError] = useState(false);
    const [email, setEmail] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [phone, setPhone] = useState('');
    const [showPhoneError, setShowPhoneError] = useState(false);
    const [message, setMessage] = useState('');
    const [showMessageError, setShowMessageError] = useState(false);
    const fading = SmoothScrolling();
    return (
        <div className={styles.contactWrapper} ref={fading}>
            <div className={styles.contact}>
                <div className={styles.title}>
                    <p data-translate="contactUsForm">დაგვიკავშირდით</p>
                </div>
                <form id="contactForm" onSubmit={e => contactFormSubmit(e)}>
                    <div className={styles.row}>
                        <div className={styles['form-group']}>
                            <input onChange={e => {
                                const val = e.target.value;
                                setName(n => n = val);
                                setShowNameError(s => s = isEmpty(val));
                            }} type="text" id="name" name="name" placeholder="სახელი" required data-translate-placeholder="firstNameForm"/>
                            <label id="name-error" className={styles.error} style={{display: showNameError ? 'block' : 'none'}} htmlFor="name" data-translate="firstNameFormError">გთხოვთ შეიყვანოთ თქვენი სახელი</label>
                        </div>
                        <div className={styles['form-group']}>
                            <input onChange={e => {
                                const val = e.target.value;
                                setSurname(s => s = val);
                                setShowSurnameError(s => s = isEmpty(val));
                            }} type="text" id="surname" name="surname" placeholder="გვარი" required data-translate-placeholder="surnameForm"/>
                            <label id="surname-error" className={styles.error} style={{display: showSurnameError ? 'block' : 'none'}} htmlFor="surname" data-translate="surnameFormError">გთხოვთ შეიყვანოთ თქვენი გვარი</label>
                        </div>
                        <div className={styles['form-group']}>
                            <input onChange={e => {
                                const val = e.target.value;
                                setEmail(em => em = val);
                                setShowEmailError(s => s = !isValidEmail(val));
                            }} type="email" id="email" name="email" placeholder="ელფოსტა" required data-translate-placeholder="mailForm"/>
                            <label id="email-error" className={styles.error} style={{display: showEmailError ? 'block' : 'none'}} htmlFor="email" data-translate="mailFormError">გთხოვთ შეიყვანოთ სწორი ელფოსტა</label>
                        </div>
                        <div className={styles['form-group']}>
                            <input onChange={e => {
                                const val = e.target.value;
                                setPhone(p => p = val);
                                setShowPhoneError(s => s = !isValidPhone(val));
                            }} type="tel" id="phone" name="phone" placeholder="ტელეფონის ნომერი" required data-translate-placeholder="phoneForm"/>
                            <label id="phone-error" className={styles.error} style={{display: showPhoneError ? 'block' : 'none'}} htmlFor="phone" data-translate="phoneFormError">გთხოვთ შეიყვანოთ სწორი ტელეფონის ნომერი</label>
                        </div>
                        <div className={styles['form-group']}>
                            <textarea onChange={e => {
                                const val = e.target.value;
                                setMessage(m => m = val);
                                setShowMessageError(s => s = !isValidMessage(val));
                            }} id="message" name="message" rows="4" placeholder="ტექსტი..." required="" data-translate-placeholder="messageForm"></textarea>
                            <label id="message-error" className={styles.error} style={{display: showMessageError ? 'block' : 'none'}} htmlFor="message" data-translate="messageFormError">გთხოვთ დაწეროთ ტექსტი</label>
                        </div>
                        <div className={styles['form-group']}>
                            <button id="submitBtn" type="submit" className={styles['submit-button']} data-translate="submitForm">გაგზავნე!</button>
                            <div id="loading-SubmitPopup" className={styles['loading-SubmitPopup']} data-translate="loadingForm">Loading...</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUsForm;