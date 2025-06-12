import '@/index.css'
import Header from '@/Pages/ka/components/Header'
import Footer from '@/Pages/ka/components/Footer'
import ContactUs from '@/Pages/ka/components/ContactUsForm'
import Map from '@/Pages/ka/components/Map'

function Contact() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <Header />
                    <ContactUs />
                    <Map />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Contact;