import React from 'react';
import { Text, Button } from 'components';

export const PasswordResetFour = () => (
  <div className="wrapper-container">
    <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
    <Text size={18} className="wrapper--text">
      We’ve sent an email to you.
      <br /> Kindly activate your account from the link in the email sent.
    </Text>
    <Button stretch btnType="primary" text="Resend Recovery Link" />
  </div>
);
