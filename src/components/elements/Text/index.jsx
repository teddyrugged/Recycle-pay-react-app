import React from 'react';
import PropTypes from 'prop-types';

const colors = {
  'primary-main': 'var(--primary-main)',
  black: 'var(--neutral-70)',
  'secondary-80': 'var(--secondary-80)',
  white: '#ffffff',
};

export const Text = ({ text, size, weight, children, color, ...props }) => (
  <p style={{ fontSize: size || 16, fontWeight: weight || 450, color: colors[color || 'black'] }} {...props}>
    {text || children}
  </p>
);

export const Heading = ({ text, size, weight, styleType, level, children, ...props }) =>
  React.createElement(
    `h${level || 1}`,
    {
      style: {
        fontSize: size || 16,
        fontWeight: weight || 450,
      },
      ...props,
    },
    text || children
  );

Text.Heading = Heading;

const basePropTypes = {
  weight: PropTypes.oneOf([400, 500, 700]),
  size: PropTypes.number,
  text: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(colors)),
};

Text.propTypes = {
  ...basePropTypes,
};

Heading.propTypes = {
  ...basePropTypes,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
