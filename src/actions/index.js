import axios from '../apis/jsonPlaceHoder';

export const fetchPosts = () =>  async (dispatch, getState) => {
    const response = await axios.get('/posts')
    dispatch({
        type:"FETCH_POSTS",
        payload: response.data
    }) 
}

export const fetchUsers = () => async (dispatch, getState) => {
    const response = axios.get("/users")
    dispatch({type: "FETCH_USERS", payload: response.data})
}

