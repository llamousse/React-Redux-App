import axios from 'axios';

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAIL = "FETCH_DATA_FAIL";

export const getData = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_DATA_START });
        axios
            .get('https://api.giphy.com/v1/gifs/trending?api_key=iBGHTLVUpgpFhdZYDsY0DJTbO2OHB0eI&limit=3&rating=PG')
            .then(res => {
                console.log('data', res.data.data);
                dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
            })
            .catch(err => {
                console.log('error', err);
                dispatch({ type: FETCH_DATA_FAIL, payload: err.response });
            })
    };
};