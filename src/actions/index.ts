import { createAction } from '@reduxjs/toolkit';

export const actionTypes = {
  SET_USER_LOCALE: 'SET_USER_LOCALE'
};

export const setUserLocale = createAction<string>(actionTypes.SET_USER_LOCALE);