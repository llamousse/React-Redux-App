import {
    FETCH_DATA_START    
} from '../actions';

const initialState = {
    gifs: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isLoading: true,
                error: ''
            };
        

        default:
            return state;
    }
};