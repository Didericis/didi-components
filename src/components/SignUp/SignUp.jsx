import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Form from '../Form';

const SignUp = (props) => {
  const { error, warning, handleSubmit } = props;
  return (
    <Form error={error} warning={warning} handleSubmit={handleSubmit}>
      <Field name="email" component="input" type="email" placeholder="Email" />
      <Field name="password" component="input" type="password" placeholder="Password" />
      <div className="didi-form__buttons">
        <button type="submit">Sign Up</button>
      </div>
    </Form>
  );
};

SignUp.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  warning: PropTypes.string,
};

export default SignUp;
