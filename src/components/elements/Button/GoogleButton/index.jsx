import React from 'react';
import PropTypes from 'prop-types';
import { FcGoogle } from 'react-icons/fc';
import { Button } from 'components';
import './style.css';

export const GoogleButton = ({ text }) => (
  <div className="wrapper-google-button">
    <div className="wrapper-logo">
      <FcGoogle size="2rem" />
    </div>
    <Button stretch btnType="secondary" btnStyle="google-button" text={text} />
  </div>
);

GoogleButton.propTypes = {
  text: PropTypes.string,
};
