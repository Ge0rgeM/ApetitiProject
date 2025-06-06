import '@/index.css'
import Header from '@/Pages/en/components/Header'
import Greeting from '@/Pages/en/components/Greeting'
import Carousel from '@/Pages/en/components/Carousel'
import Footer from '@/Pages/en/components/Footer'
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