import React from 'react';
import { TbMinusVertical } from 'react-icons/tb';
import PropTypes from 'prop-types';
import { Input } from 'components';
import './style.css';

export const FullPhoneRoundInput = ({ placeholder }) => (
  <div className="wrapper-phone-input">
    <p className="phone-prop">+234</p>
    <TbMinusVertical className="line-prop" size={50} />
    <Input style={{ paddingLeft: '70px' }} inputType="lg" styleType="full-round" type="tel" placeholder={placeholder} />
  </div>
);

FullPhoneRoundInput.propTypes = {
  placeholder: PropTypes.string,
};
