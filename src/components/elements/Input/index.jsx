import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import clsx from 'clsx';

export const Input = ({ inputType, styleType, type, placeholder, ...props }) => (
  <input
    className={clsx(`${inputType || 'lg-form-input'} ${styleType}`, ['form-input'])}
    type={type || 'text'}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  inputType: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  styleType: PropTypes.oneOf(['l-round', 'r-round', 'full-round', 'le-round', 're-round']),
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'search', 'url']),
  placeholder: PropTypes.string,
};
