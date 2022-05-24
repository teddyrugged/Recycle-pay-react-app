import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ text, children }) => <p>{text || children}</p>;

export const Heading = ({ text, children, level, ...props }) =>
  React.createElement(`h${level || 1}`, { ...props }, text || children);

Text.Heading = Heading;

Text.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

Heading.propTypes = {
  text: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node,
};
