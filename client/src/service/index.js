import axios from 'axios';
import { getAllProductsSuccess, applyPromoCodeSuccess } from '../redux/actions';

export const getAllProducts = () => {
    return function(dispatch) {
        axios.get('/products').then((res) => { 
            console.log(res.data);
            dispatch(getAllProductsSuccess(res.data))
        })
        .catch((error) => {
            dispatch(getAllProductsSuccess([]))
        });
    }
}

export const getCheckoutInfo = (state) => {
    let subTotal = state.basket.products.reduce((acc, cur) => {
        return acc + cur.price * cur.quantity;
    }, 0.00)
    let discount = state.checkout.promoData.length === 0 ? 0 : (state.checkout.promoData.amount / 100);
    let discountAmount = subTotal * discount;
    let total = subTotal - discountAmount;
    return {
        subTotal: subTotal.toFixed(2),
        discount: discountAmount.toFixed(2),
        total: total.toFixed(2)
    }
}

export const applyPromoCode = (code) => {
    return function(dispatch) {
        axios.post('/promocode', {
            "promoCode": code
        }).then((res) => { 
            console.log(res.data);
            dispatch(applyPromoCodeSuccess(code, res.data))
        })
        .catch((error) => {
            dispatch(applyPromoCodeSuccess({}))
        });
    }
}

export const basketCheckout = (products, cardNum) => {
    let basket = products.map(product => {
        return {
            "sku": product.sku,
            "quantity": product.quantity
        }
    })
    const response = axios.post('/checkout', {
        "basket": [
            ...basket
        ],
        "cardNumber": cardNum
    }).then((res) => 
        res.data
    )
    .catch((error) => 
       error
    );
    return response
}