import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import clsx from 'clsx';

export const Button = ({ text, btnType, btnStyle, stretch, round, children, ...props }) => (
  <button
    className={clsx(`button-base ${btnType || 'primary'} ${btnStyle}`, [
      { stretch, round, 'round-secondary': round && btnType === 'secondary' },
    ])}
    type="button"
    {...props}
  >
    {text || children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  stretch: PropTypes.bool,
  round: PropTypes.bool,
  btnStyle: PropTypes.string,
};
