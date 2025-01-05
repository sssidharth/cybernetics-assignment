export const FETCH_USERS_DATA_START = "FETCH_USERS_DATA_START";
export const FETCH_USERS_DATA_SUCCESS = "FETCH_USERS_DATA_SUCCESS";
export const FETCH_USERS_DATA_FAILED = "FETCH_USERS_DATA_FAILED";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const SET_SELECTED_USER = "SET_SELECTED_USER";

export const fetchUsersData = () => ({
  type: FETCH_USERS_DATA_START,
});

export const fetchUsersDataSuccess = (data) => ({
  type: FETCH_USERS_DATA_SUCCESS,
  payload: data,
});

export const fetchUsersDataFailed = (error) => ({
  type: FETCH_USERS_DATA_FAILED,
  payload: error,
});

export const setSearchValue = (val) => ({
    type: SET_SEARCH_VALUE,
    payload: val,
});

export const setSelectedUser = (user) => ({
    type: SET_SELECTED_USER,
    payload: user
});
