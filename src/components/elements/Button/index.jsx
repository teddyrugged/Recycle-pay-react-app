import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ReactComponent as GoogleIcon } from './googlebtn.svg';
import './style.css';

export const Button = ({ text, btnType, stretch, round, children, ...props }) => (
  <button
    className={clsx(`button-base ${btnType || 'primary'}`, [
      { stretch, round, 'round-secondary': round && btnType === 'secondary' },
    ])}
    type="button"
    {...props}
  >
    {text || children}
  </button>
);

export const MainGreen = ({ text, children }) => (
  <button type="submit" className="button-base stretch primary">
    {text || children}
  </button>
);

export const GoogleBtn = ({ text, children }) => (
  <div className="wrapper-google-btn">
    <div className="wrapper-logo">
      <GoogleIcon />
    </div>
    <button type="submit" className="button-base stretch secondary" style={{ cursor: 'pointer' }}>
      <span className="btn-text">{text || children}</span>
    </button>
  </div>
);

Button.MainGreen = MainGreen;
Button.GoogleBtn = GoogleBtn;

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  btnType: PropTypes.oneOf(['primary', 'secondary']),
  stretch: PropTypes.bool,
  round: PropTypes.bool,
};

MainGreen.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

GoogleBtn.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
