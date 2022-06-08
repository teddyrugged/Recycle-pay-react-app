import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'components';
import './style.css';

export const MainFooterText = ({ text1, text2, link }) => (
  <div className="main-footer-text">
    <Text text={text1} size="14px" weight={500} level={4} styleType="label-text1 label-text " />
    <a href={link}>
      <Text text={text2} size="14px" weight={500} level={4} styleType="label-text2 label-text " />
    </a>
  </div>
);

MainFooterText.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  link: PropTypes.string,
};
