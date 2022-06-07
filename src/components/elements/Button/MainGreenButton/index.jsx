import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components';
import './style.css';

export const MainGreenButton = ({ text }) => (
  <div>
    <Button stretch btnType="primary" btnStyle="main-button" text={text} />
  </div>
);

MainGreenButton.propTypes = {
  text: PropTypes.string,
};
