import React from 'react';
import { FullPhoneRoundInput, LabelText } from 'components';
import './style.css';

export const SignUpPhone = () => (
  <div>
    <div className="wrapper--phone">
      <div className="wrapper--label--phone">
        <LabelText text="Phone Number" />
      </div>
      <div className="wrapper--label--input">
        <FullPhoneRoundInput placeholder="" />
      </div>
    </div>
  </div>
);
