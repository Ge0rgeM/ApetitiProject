import styles from '@/Css/Map.module.css';
import SmoothScrolling from "@/SmoothScrolling/SmoothScrolling";
function Map() {
    const fading = SmoothScrolling();
    const MapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.898016863573!2d44.74049731224567!3d41.787411471131946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446f878e1681f5%3A0x82f0539d24ee8dde!2sYour%20Shop%20Name!5e0!3m2!1sen!2sge!4v1749625026988!5m2!1sen!2sge';
    return (
        <div className={styles.mapWrapper} ref={fading}>
            <div className={styles['map-container']}>
                <iframe src={MapLink} width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
            <div className={styles.contactSources}>
                <div className={styles.contactSource}>
                    <div>
                        <p data-translate = "address">მისამართი: თბილისი, მირიან მეფის ...</p>
                    </div>
                    <div>
                        <p data-translate = "ourMobile">ტელ: (+995) 555 55 55 55</p>
                    </div>
                    <div>
                        <p data-translate = "ourMail">ელ. ფოსტა: example@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Map;