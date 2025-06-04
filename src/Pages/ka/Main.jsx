import '@/index.css'
import Header from '@/Pages/ka/components/Header'
import Footer from '@/Pages/ka/components/Footer'
import Greeting from '@/Pages/ka/components/Greeting'

function Main() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <div className="temp"></div>
                    <Header />
                    <Greeting />
                    <div className="temp"></div>
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main