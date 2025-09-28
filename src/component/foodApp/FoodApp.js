import Header from './components/HeaderComponents';
import { Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';
import appStore from './redux/appStore';

const Footer = () => {
    return <div className='footerComponent bg-amber-100 justify-end'> It is Footer.</div>
}

const FoodApp = () => {
    return (
        <Provider store={appStore}>
            <div className='food-app-container'>
                <Header />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    )
};

export default FoodApp;