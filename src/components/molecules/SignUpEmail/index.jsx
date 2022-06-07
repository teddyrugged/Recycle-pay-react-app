import React from 'react';
import { FullDualRoundInput, LabelText } from 'components';
import './style.css';

export const SignUpEmail = () => (
  <div className="wrapper--email">
    <div className="wrapper--label--email">
      <LabelText text="Email Address" />
    </div>
    <div className="wrapper--input--email">
      <FullDualRoundInput type="email" placeholder="" />
    </div>
  </div>
);
