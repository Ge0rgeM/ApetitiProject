import '@/index.css'
import Header from '@/Pages/ka/components/Header'
import Footer from '@/Pages/ka/components/Footer'
import ContactUs from '@/Pages/ka/components/ContactUsForm'
function Contact() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <Header />
                    <ContactUs />
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Contact;