import '@/index.css'
import Header from '@/Pages/ka/components/Header';
import Menu from '@/Pages/ka/components/Menu';

function Delivery() {
    return (
        <>
            <div className="bodyWrapper">
                <div className="bodyWrapperShade">
                    <Header />
                    <Menu />
                </div>
            </div>
        </>
    );
}

export default Delivery;