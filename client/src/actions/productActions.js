import axios from 'axios';
import { GET_PRODUCT, ADD_PRODUCT, CHANGE_PRODUCT, DELETE_PRODUCT, PRODUCT_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getProducts = () => dispatch => {
    dispatch(setProductsLoading());
    axios
        .get('/api/product')
        .then(res =>
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const addProduct = product => (dispatch, getState) => {
    axios
        .post('/api/product', product, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const changeProduct = (id, product) => (dispatch, getState) => {
    axios
        .patch(`/api/product/${id}`, product, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: CHANGE_PRODUCT,
                payload: res.data
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const deleteProduct = id => (dispatch, getState) => {
    axios
        .delete(`/api/product/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            })
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setProductsLoading = () => {
    return {
        type: PRODUCT_LOADING
    };
};

