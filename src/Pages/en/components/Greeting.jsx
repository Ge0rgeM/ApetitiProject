import styles from '@/Css/Greeting.module.css'
import { Link, useNavigate } from 'react-router-dom';
function Greeting() {

    return (
        <div className={styles.greeting}>
            <div className={styles['greeting-title']}>
                <p data-translate="greetingTitle">Your Home Taste</p>
            </div>
            <div className={styles['greeting-text']}>
                <p data-translate = "greetingText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet delectus mollitia enim labore magnam esse corrupti, accusantium ex rerum reiciendis quasi quaerat officia, nisi sapiente non fugiat quas aliquid, placeat eos consequatur eius nulla et debitis. Sequi fuga distinctio id ea quos illum tenetur deleniti assumenda fugit ipsum quibusdam excepturi quisquam at expedita, consectetur hic ratione et ex porro. Quaerat tempora quas architecto perspiciatis, voluptates voluptatibus ratione repudiandae consectetur, autem ipsam consequatur quibusdam doloribus repellat voluptatum in, magni provident excepturi nemo dolor laboriosam! Suscipit amet expedita saepe maiores molestias quo veritatis sit recusandae eum consectetur, magnam debitis fuga dolor rem alias dicta mollitia tempore ad necessitatibus atque? Voluptatem maiores similique sunt eos dolorem ex voluptates architecto enim deleniti totam rem, recusandae alias, corporis doloribus veniam optio corrupti quas hic praesentium! Maxime, quae saepe. Inventore culpa ratione maxime molestias similique saepe minus, libero asperiores fuga blanditiis aliquid fugit quas porro rem facilis nihil dolores quae quod natus temporibus odit nisi repellat vero. Officia nemo error architecto aliquid minus iste temporibus eaque odit? Officiis obcaecati ipsam veritatis, officia repellat suscipit dolor et perferendis culpa quos sapiente dolores praesentium eveniet amet sed, omnis beatae, tempore dolorem tempora commodi distinctio quisquam mollitia esse debitis.
                </p>
            </div>
            <div className={styles['contuct-us']}>
                <Link to={'/en/Contact'} className={styles['contact-link']}> 
                    <div data-translate = "contactUs">Contact Us</div>
                </Link>
            </div>
        </div>
    );
}
export default Greeting;