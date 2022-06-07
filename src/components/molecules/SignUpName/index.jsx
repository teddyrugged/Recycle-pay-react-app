import React from 'react';
import { LabelText, HalfLeftRoundInput, HalfRightRoundInput } from 'components';
import './style.css';

export const SignUpName = () => (
  <div className="wrapper--name">
    <div>
      <div className="wrapper--label--firstname">
        <LabelText text="First Name" />
      </div>
      <div className="wrapper--input--firstname">
        <HalfLeftRoundInput />
      </div>
    </div>
    <div>
      <div className="wrapper--label--lastname">
        <LabelText text="Last Name" />
      </div>
      <div className="wrapper--input--lastname">
        <HalfRightRoundInput />
      </div>
    </div>
  </div>
);
