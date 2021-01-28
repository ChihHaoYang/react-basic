import * as actions from '../../../actions';
import { SUPPORT_LANGUAGES } from '../../../constants';
import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from './user.types';

const uniformedBrowserLang = (window.navigator.languages || [window.navigator.language]).map(lang => lang.replace('_', '-').toLowerCase());
const browserLang = uniformedBrowserLang.find(lang => SUPPORT_LANGUAGES.includes(lang)) || 'en-us';

const initialState: UserState = {
  browserLang,
  isLoggedIn: false
}

function setUserLocale(state: UserState, action: PayloadAction<string>) {
  return {
    ...state,
    browserLang: action.payload
  }
}

const user = createReducer(initialState, {
  [actions.setUserLocale.type]: setUserLocale,
})

export default user;