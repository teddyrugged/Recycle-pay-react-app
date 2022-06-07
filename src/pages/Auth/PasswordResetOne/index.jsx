import React from 'react';
import { AuthLayout } from 'layouts';
import { LabelText, FullDualRoundInput, ResetTitle, Button } from 'components';

export const PasswordResetOne = () => (
  <AuthLayout>
    <ResetTitle />
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <LabelText text="Enter your Email Address" />
      </div>
      <div className="wrapper--input--email">
        <FullDualRoundInput type="email" placeholder="" />
      </div>
    </div>
    <Button stretch btnType="primary" text="Send Recovery Link" />
  </AuthLayout>
);
