import {
    ADD_TO_BASKET,
    REMOVE_PRODUCT
} from '../actions/actionTypes';
import {initialBasket} from '../initialState';

export default function basket(state = initialBasket, action) {
    switch (action.type) {
        case ADD_TO_BASKET:
            if(state.products.length === 0) {
                return {
                    ...state,
                    products: [{ ...action.payload.product, quantity: 1}],
                    quantity: ++state.quantity
                }
            } else {
                let preProducts = state.products;
                let index = preProducts.findIndex(product => product.sku === action.payload.product.sku);
                if(index > -1) {
                    if(preProducts[index].quantity >= 10) {
                        return {
                            ...state
                        }
                    } else {
                        preProducts[index]['quantity'] = ++preProducts[index].quantity;
                        return {
                            ...state,
                            products: [...preProducts],
                            quantity: ++state.quantity
                        }
                    }
                    
                } else {
                    let product = {
                        ...action.payload.product,
                        quantity: 1
                    }
                    return {
                        ...state,
                        products: [...preProducts, product],
                        quantity: ++state.quantity
                    }
                }
                
            }
        case REMOVE_PRODUCT:           
            let preProducts = state.products;
            let quantity = 0;
            preProducts = preProducts.filter(function( obj ) {
                if(obj.sku === action.payload.product.sku) quantity = obj.quantity;
                return obj.sku !== action.payload.product.sku;
            });
            return {
                ...state,
                products: [...preProducts],
                quantity: state.quantity - quantity
            }
        default:
            return state;
    }
}