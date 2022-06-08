import React from 'react';
import { FullDualRoundInput, LabelText } from 'components';
import './style.css';

export const SignUpPassword = () => (
  <div className="wrapper--password">
    <div className="wrapper--label--password">
      <LabelText text="Set a Password" />
    </div>
    <div className="wrapper--input--password">
      <FullDualRoundInput type="password" placeholder="" />
    </div>
  </div>
);
