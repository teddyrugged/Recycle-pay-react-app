import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Text = ({ text, size, weight, styleType, children }) => (
  <p style={{ fontSize: size ?? 16, fontWeight: weight ?? 450 }} className={clsx(`${styleType}`)}>
    {text || children}
  </p>
);

export const Heading = ({ text, size, weight, styleType, level, children, ...props }) =>
  React.createElement(
    `h${level || 1}`,
    {
      className: { styleType },
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
  styleType: PropTypes.string,
  children: PropTypes.node,
};

Text.propTypes = {
  ...basePropTypes,
};

Heading.propTypes = {
  ...basePropTypes,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};
