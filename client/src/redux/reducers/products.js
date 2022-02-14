import { 
    GET_ALL_PRODUCTS
} from '../actions/actionTypes';
import {initialProducts} from '../initialState';

export default function products(state = initialProducts, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS: {
            return {
                ...state,
               data: [...action.payload.products]
            }
        }
        default:
            return state;
    }
}