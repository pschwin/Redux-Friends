import axios from 'axios';

export const LOGIN_START = "LOGIN_START";
export const GET_FRIEND_LIST ="GET_FRIEND_LIST"


export const login = creds => dispatch =>{
    dispatch({type: LOGIN_START});
    return axios.post('http://localhost:5000/api/login', creds).then(res =>{
        localStorage.setItem('token', res.data.payload)
    })
}

export const getFriendList = () =>{
    const friends = axios.get('http://localhost:5000/api/login');
    return dispatch =>({type: GET_FRIEND_LIST});
    friends 
        .then(response =>{
            dispatch({type: GET_FRIEND_LIST, payload: response.data})
        })
}