import React from 'react';
import './signup.css';
import PropTypes from 'prop-types';
import { Text } from 'components';
import clsx from 'clsx';

export const AuthLayout = ({ children, className, ...props }) => (
  <header className={clsx('nav-container', className)} {...props}>
    <div>
      <Text size={24}>Recycle Pay</Text>
    </div>
    <div className="form-container">{children}</div>
  </header>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
