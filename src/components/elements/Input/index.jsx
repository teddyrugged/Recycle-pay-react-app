import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import clsx from 'clsx';

export const Input = ({ inputType, styleType, type, pattern, placeholder, ...props }) => (
  <input
    className={clsx(`${inputType || 'lg-form-input'} ${styleType}`, [])}
    type={type || 'text'}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  inputType: PropTypes.oneOf(['xs-form-input', 'sm-form-input', 'md-form-input', 'lg-form-input']),
  styleType: PropTypes.oneOf(['left-round', 'right-round', 'full-round']),
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'search', 'url']),
  pattern: PropTypes.string,
  placeholder: PropTypes.string,
  round: PropTypes.bool,
  fullRound: PropTypes.bool,
};
