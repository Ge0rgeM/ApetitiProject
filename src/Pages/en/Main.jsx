import '@/index.css'
import Header from '@/Pages/en/Header'
function Main() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <Header />
                    <div className="temp"></div>
                </div>
            </div>
        </>
    );
};

export default Main