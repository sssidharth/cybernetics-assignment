import { call, put, takeEvery, delay } from 'redux-saga/effects';
import apiClient from '../../axios.config';
import data from '../../db.json';
import {
    FETCH_USERS_DATA_START,
    fetchUsersDataSuccess,
    fetchUsersDataFailed
} from '../actions/actions';

const envPath = process.env.REACT_APP_API_BASE_URL === '/vercel-env';

export function* mainSaga() {
    yield takeEvery(FETCH_USERS_DATA_START, handleFetchUsersData);
  }

function* handleFetchUsersData() {
    try {
        const response = envPath ? data.users : yield call(() => apiClient.get('/users'));

        yield delay(2000);
        yield put(fetchUsersDataSuccess(envPath ? response : response.data));
    }
    catch (error) {
        yield put(fetchUsersDataFailed('Failed to fetch users data'));
    }
}