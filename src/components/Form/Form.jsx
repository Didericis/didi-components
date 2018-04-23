import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Form as ReduxForm } from 'redux-form';

const Form = ({
  children, className, error, warning, handleSubmit, style,
}) => (
  <ReduxForm
    onSubmit={handleSubmit}
    className={classNames('didi-form', className)}
    style={style}
  >
    {children}
    {error &&
      <div className="didi-form__error">
        <strong>{error}</strong>
      </div>}
    {warning &&
      <div className="didi-form__warning">
        <strong>{warning}</strong>
      </div>}
  </ReduxForm>
);

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.string,
  handleSubmit: PropTypes.func,
  style: PropTypes.object,
  warning: PropTypes.string,
};

export default Form;
