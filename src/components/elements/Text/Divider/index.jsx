import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components';
import './style.css';

export const Divider = ({ text }) => (
  <div className="wrapper-divider">
    <div className="rule" />
    <Text text={text} size="16px" weight={450} styleType="divider-text" />
    <div className="rule" />
  </div>
);

Divider.propTypes = {
  text: PropTypes.string,
};
