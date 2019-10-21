import API from '../utils/api';
import { getUsers } from '../actionTypes/action';

export const getUsersApiCall = async (dispatch) => {
    const res = await API.get(`users`);

    dispatch(getUsers(res.data));
}