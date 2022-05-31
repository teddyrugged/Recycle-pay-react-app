import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import clsx from 'clsx';

export const Input = ({ inputType, type, id, name, value, placeholder, round, fullRound, ...props }) => (
  <input
    className={clsx(`input-base ${inputType || 'form-input'}`, [{ round, fullRound }])}
    type={type || 'text'}
    id={id}
    name={name}
    value={value}
    placeholder={placeholder}
    {...props}
  />
);

Input.propTypes = {
  inputType: PropTypes.oneOf(['form-input', 'form-input-name', 'form-input-phone', 'search-input']),
  type: PropTypes.oneOf(['text', 'password', 'email', 'search', 'url']),
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  round: PropTypes.bool,
  fullRound: PropTypes.bool,
};
