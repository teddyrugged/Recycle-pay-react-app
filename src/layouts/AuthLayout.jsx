import React from 'react';
import './signup.css';
import PropTypes from 'prop-types';
import { Text } from 'components';
import clsx from 'clsx';

export const AuthLayout = ({ divWidth, divHeight, children }) => (
  <div className={clsx(`${divWidth} ${divHeight}`, ['nav-container'])}>
    <header>
      <Text size={24}>Recycle Pay</Text>
    </header>
    <div className="form-container">{children}</div>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
  divWidth: PropTypes.string,
  divHeight: PropTypes.string,
};
