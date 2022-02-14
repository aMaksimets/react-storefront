import {
    APPLY_PROMO_CODE
} from '../actions/actionTypes';
import {initialCheckout} from '../initialState';

export default function checkout(state = initialCheckout, action) {
    switch (action.type) {
        
        case APPLY_PROMO_CODE: {
            console.log({
                ...state,
                promoCode: action.payload.code,
                promoData: action.payload.data
            })
            return {
                ...state,
                promoCode: action.payload.code,
                promoData: action.payload.data
            }
        }
        default:
            return state;
    }
}