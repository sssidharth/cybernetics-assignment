import {
    FETCH_USERS_DATA_START,
    FETCH_USERS_DATA_SUCCESS,
    FETCH_USERS_DATA_FAILED,
    SET_SEARCH_VALUE,
    SET_SELECTED_USER
} from "../actions/actions";

const initialState = {
    usersData: {},
    loading: false,
    error: null,
    searchValue: '',
    selectedProfile: {}
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
       case FETCH_USERS_DATA_START:
        return {
            ...state,
            loading: true,
            error: null,
        };
       case FETCH_USERS_DATA_SUCCESS:
        return {
            ...state,
            usersData: action.payload,
            loading: false
        }
       case FETCH_USERS_DATA_FAILED:
        return {
            ...state,
            loading: false,
            error: action.error
        }
       case SET_SEARCH_VALUE:
        return {
            ...state,
            searchValue: action.payload
        }
       case SET_SELECTED_USER:
        return {
            ...state,
            selectedProfile: action.payload
        }
       default:
        return state;
    }
}

export default usersReducer;