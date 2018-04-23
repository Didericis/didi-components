import React from 'react';
import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {
  clearSubmitErrors, reduxForm, SubmissionError,
  reducer as formReducer,
} from 'redux-form';
import { compose, withProps } from 'recompose';

import LogIn from '../LogIn';
import SignUp from '../SignUp';

const store = createStore(combineReducers({ form: formReducer }));

const createRequest = body => ({
  method: 'POST',
  credentials: 'same-origin',
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const LogInContainer = compose(
  withProps(props => ({
    onSubmit(body) {
      return fetch(props.logInUrl, createRequest(body)).then((response) => {
        if (response.status >= 400) {
          throw new SubmissionError({
            password: 'Invalid Credentials',
            _error: 'Log in failed!',
          });
        }
      });
    },
  })),
  reduxForm({
    form: 'didi-auth-login',
    onChange: (values, dispatch, props) => {
      if (props.error) dispatch(clearSubmitErrors('didi-auth-login'));
    },
  }),
)(LogIn);

const SignUpContainer = compose(
  withProps(props => ({
    onSubmit(body) {
      return fetch(props.signUpUrl, createRequest(body)).then((response) => {
        if (response.status >= 400) {
          throw new SubmissionError({
            password: 'Invalid Credentials',
            _error: 'Sign Up failed!',
          });
        }
      });
    },
  })),
  reduxForm({
    form: 'didi-auth-signup',
    onChange: (values, dispatch, props) => {
      if (props.error) dispatch(clearSubmitErrors('didi-auth-signup'));
    },
  }),
)(SignUp);

const Authentication = ({ children, logInUrl, signUpUrl }) => (
  <Provider store={store} >
    <div className="didi-authentication">
      <div className="didi-authentication__content">
        {children}
      </div>
      <div className="didi-authentication__forms">
        <LogInContainer logInUrl={logInUrl} />
        <SignUpContainer signUpUrl={signUpUrl} />
      </div>
    </div>
  </Provider>
);

Authentication.propTypes = {
  children: PropTypes.node,
  logInUrl: PropTypes.string,
  signUpUrl: PropTypes.string,
};

export default Authentication;
