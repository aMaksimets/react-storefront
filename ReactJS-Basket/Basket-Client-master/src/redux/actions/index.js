import { 
    GET_ALL_PRODUCTS, 
    ADD_TO_BASKET, 
    GET_CHECKOUT_INFO,
    REMOVE_PRODUCT,
    APPLY_PROMO_CODE
} from './actionTypes';

export const getAllProductsSuccess = (products) => ({
    type: GET_ALL_PRODUCTS,
    payload: {products}
})

export const addToBasket = (product) => ({
    type: ADD_TO_BASKET,
    payload: {product}
})

export const getCheckoutInfo = (products) => ({
    type: GET_CHECKOUT_INFO,
    payload: {products}
})

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    payload: {product}
})

export const applyPromoCodeSuccess = (code, data) => ({
    type: APPLY_PROMO_CODE,
    payload: {code, data}
})