import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Text = ({ text, size, weight, children }) => (
  <p style={{ fontSize: size ?? 16, fontWeight: weight ?? 450 }} className={clsx()}>
    {text || children}
  </p>
);

export const Heading = ({ text, children, size, weight, level, ...props }) =>
  React.createElement(
    `h${level || 1}`,
    {
      style: {
        fontSize: size ?? 16,
        fontWeight: weight ?? 450,
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
};

Text.propTypes = {
  ...basePropTypes,
};

Heading.propTypes = {
  ...basePropTypes,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
