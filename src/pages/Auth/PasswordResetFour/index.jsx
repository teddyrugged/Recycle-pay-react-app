import React from 'react';
import { Text, Button, Input } from 'components';

export const PasswordResetFour = () => (
  <div className="wrapper-container">
    <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <Text text="Enter your new Password" />
      </div>
      <div className="wrapper--input--email">
        <Input.FullRound name="password" type="password" placeholder="Abc123." />
      </div>
    </div>
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <Text text="Re-type your new Password" />
      </div>
      <div className="wrapper--input--email">
        <Input.FullRound name="confirmPassword" type="password" placeholder="Abc123." />
      </div>
    </div>
    <Button stretch btnType="primary" text="Reset Password" />
  </div>
);
