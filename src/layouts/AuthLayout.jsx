import React from 'react';
import './signup.css';
import PropTypes from 'prop-types';
import { Text } from 'components';

export const AuthLayout = ({ children }) => (
  <div className="nav-container">
    <header>
      <Text.Heading text="Recyclepay" />
    </header>
    <div className="form-container">{children}</div>
  </div>
);

AuthLayout.propTypes = {
  children: PropTypes.node,
};
