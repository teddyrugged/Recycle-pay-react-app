import React from 'react';
import { AuthLayout } from 'layouts';
import { Text, Button } from 'components';

export const PasswordResetTwo = () => (
  <AuthLayout>
    <Text size={20}>Reset password</Text>
    <Text size={24}>
      Weve sent a recovery link to your mail. Kindly open the link we sent to continue to password rest.
    </Text>
    <Button stretch btnType="primary" text="Resend Recovery Link" />
  </AuthLayout>
);
