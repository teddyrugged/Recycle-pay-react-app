import React from 'react';
import { SignUp } from 'components';
import { AuthLayout } from 'layouts';

export const SignInPage = () => (
  <div>
    <AuthLayout>
      <SignUp />
    </AuthLayout>
  </div>
);
