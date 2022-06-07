import React from 'react';
import './signup.css';
import PropTypes from 'prop-types';
import { Text } from 'components';
import clsx from 'clsx';

export const AuthLayout = ({ children, headerClassName, bodyClassName }) => (
  <>
    <header className={clsx('nav-container', headerClassName)}>
      <Text size={24}>Recycle Pay</Text>
    </header>
    <div className={clsx('form-container', bodyClassName)}>{children}</div>
  </>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
  headerClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};
