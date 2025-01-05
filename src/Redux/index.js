import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import usersReducer from './reducers/usersReducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    usersReducer: usersReducer,
});

const store = configureStore({
  reducer: rootReducer, // Pass the rootReducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Add sagaMiddleware
});

sagaMiddleware.run(rootSaga);

export default store;
