import { createAction, handleActions } from 'redux-actions';
import produce from "immer";
import { createRequestActionTypes } from "../lib/createRequestSaga";
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';

const CHANGE_FILED = 'auth/CHANGE_FILED';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
// const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
//
// const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const [ REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE ] = createRequestActionTypes('auth/REGISTER');
const [ LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE ] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(
  CHANGE_FILED,
  ({ form, key, value}) => ({
    form,
    key,
    value,
  })
);

export const initializeForm = createAction(
  INITIALIZE_FORM,
  form => form
);

const initialState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
  },
  login: {
    username: '',
    password: '',
  }
};

const auth = handleActions({
  [CHANGE_FILED]: (state, { payload: { form, key, value }}) =>
    produce(state, draft => {
      draft[form][key] = value;
    }),
  [INITIALIZE_FORM]: (state, { payload: form}) => ({
    ...state,
    [form]: initialState[form]
  })
},initialState);

export default auth;
