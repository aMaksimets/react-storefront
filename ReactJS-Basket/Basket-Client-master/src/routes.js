import ProductsList from './pages/ProductsList';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Failed from './pages/Failed';

export const routes = [
    {
        path: "/",
        component: ProductsList
    },
    {
        path: "/checkout",
        component: Checkout
    },
    {
        path: "/success",
        component: Success
    },
    {
        path: "/failed",
        component: Failed
    }
]