import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import Home from '../Pages/Home/Home';
import Sell from '../Pages/Sell/Sell';
import Contacts from '../Pages/Contacts/Contacts';
import Products from '../Pages/Products/Products';
import Purchases from '../Pages/Purchases/Purchases';
import Expenses from '../Pages/Expenses/Expenses';
import Accounting from '../Pages/Accounting/Accounting';
import Reports from '../Pages/Reports/Reports';
import Settings from '../Pages/Settings/Settings';
import SellPage from '../Pages/Sell/Pages/SellPage/SellPage';
import AllSell from '../Pages/Sell/Pages/AllSell/AllSell';

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
                element: <Sell />,
                children: [
                    {
                        path: '/sell',
                        element: <SellPage />
                    },
                    {
                        path: '/sell/allSell',
                        element: <AllSell />
                    }
                ]
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
            },
            {
                path: '/expenses',
                element: <Expenses />
            },
            {
                path: '/accounting',
                element: <Accounting />
            },
            {
                path: '/reports',
                element: <Reports />
            },
            {
                path: '/settings',
                element: <Settings />
            }
        ]
    }
]);

export default router;