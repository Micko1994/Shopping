import {
    GET_PRODUCT,
    ADD_PRODUCT,
    CHANGE_PRODUCT,
    DELETE_PRODUCT,
    PRODUCT_LOADING
} from '../actions/types';

const initialState = {
    product: [],
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                loading: false
            };
        case CHANGE_PRODUCT:
            return {
                ...state,
                product: state.product.map(product => product._id === action.payload ? action.payload : product)
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                product: state.product.filter(product => product._id !== action.payload)
            };
        case ADD_PRODUCT:
            return {
                ...state,
                product: [action.payload, ...state.product]
            };
        case PRODUCT_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}
