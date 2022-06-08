import React from 'react';
import { Input } from 'components';
import PropTypes from 'prop-types';
import './style.css';

export const FullDualRoundInput = ({ type, placeholder }) => (
  <div>
    <Input inputType="lg" styleType="full-round" type={type} placeholder={placeholder} />
  </div>
);

FullDualRoundInput.propTypes = {
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'search', 'url']),
  placeholder: PropTypes.string,
};
