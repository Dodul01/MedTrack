import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../Pages/Home/Home';
import Sell from '../Pages/Sell/Sell';
import Contacts from '../Pages/Contacts/Contacts';
import Products from '../Pages/Products/Products';
import Purchases from '../Pages/Purchases/Purchases';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/sell',
                element: <Sell />
            },
            {
                path: '/contacts',
                element: <Contacts />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/purchases',
                element: <Purchases />
            }
        ]
    }
]);

export default router;