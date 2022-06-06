import React from 'react';
import { SignIn } from 'components';
import { AuthLayout } from 'layouts';

export const SignInPage = () => (
  <div>
    <AuthLayout>
      <SignIn />
    </AuthLayout>
  </div>
);
