import axios from 'axios';
import { GET_USER, USER_LOADING } from './types';
import { returnErrors } from './errorActions';

export const getUserInfo = (id) => (dispatch) => {
    dispatch(setUsersLoading());
    axios
        .get(`/api/users/${id}`)
        .then(res => {
            return dispatch({
                type: GET_USER,
                payload: res.data
            })
        }
        )
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};

export const setUsersLoading = () => {
    return {
        type: USER_LOADING
    };
};
