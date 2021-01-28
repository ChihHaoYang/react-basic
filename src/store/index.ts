import { createStore, applyMiddleware, compose } from 'redux';
import { AnyAction } from '@reduxjs/toolkit';
import reducer, { RootState } from './reducers';
import { createEpicMiddleware } from 'redux-observable';
import epic from '../epics';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const isProduction = process.env.NODE_ENV === 'production';
const store = createStore(reducer, (isProduction ? applyMiddleware(epicMiddleware) : composeEnhancers(applyMiddleware(epicMiddleware))));
epicMiddleware.run(epic);

export default store;