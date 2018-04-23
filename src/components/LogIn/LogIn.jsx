import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

import Form from '../Form';

const LogIn = (props) => {
  const { error, warning, handleSubmit } = props;
  return (
    <Form error={error} warning={warning} handleSubmit={handleSubmit}>
      <Field name="email" component="input" type="email" placeholder="Email" />
      <Field name="password" component="input" type="password" placeholder="Password" />
      <div className="didi-form__buttons">
        <button type="submit">Log In</button>
      </div>
    </Form>
  );
};

LogIn.propTypes = {
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  warning: PropTypes.string,
};

export default LogIn;
