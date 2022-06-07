import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components';
import './style.css';

export const MainTitleText = ({ text }) => (
  <div>
    <Text text={text} size="24px" weight={500} level={1} styleType="main-title-text" />
  </div>
);

MainTitleText.propTypes = {
  text: PropTypes.string,
};
