import { combineEpics, Epic, ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { AnyAction, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../store/reducers';

import * as actions from '../actions';

const setUserLocaleEpic: Epic<AnyAction, AnyAction, RootState> = action$ =>
  action$.pipe(
    ofType(actions.setUserLocale),
    switchMap(async action => {
      return actions.setUserLocale(action.payload)
    })
  )

const rootEpic: Epic<AnyAction, AnyAction, RootState> = combineEpics(
  setUserLocaleEpic,
)

export default rootEpic;