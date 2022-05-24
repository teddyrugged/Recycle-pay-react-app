import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ text, children }) => <button type="button">{text || children}</button>;

Button.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};
