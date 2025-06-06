import '@/index.css'
import Header from '@/Pages/ka/components/Header'
import Footer from '@/Pages/ka/components/Footer'
import Greeting from '@/Pages/ka/components/Greeting'
import Carousel from '@/Pages/ka/components/Carousel'
function Main() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <Header />
                    <Carousel />
                    <Greeting />
                    {/* <div className="temp"></div> */}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Main