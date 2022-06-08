import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components';
import './style.css';

export const LabelText = ({ text }) => (
  <div>
    <Text text={text} size="16px" weight={450} level={3} styleType="label-text" />
  </div>
);

LabelText.propTypes = {
  text: PropTypes.string,
};
