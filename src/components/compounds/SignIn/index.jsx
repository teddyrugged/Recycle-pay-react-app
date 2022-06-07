import React from 'react';
import { SignInTitle, SignInForgotPassword, SignInButton, SignInEmail, SignInPassword, SignInFooter } from 'components';
import './style.css';

export const SignIn = () => (
  <div>
    <SignInTitle />
    <SignInEmail />
    <SignInPassword />
    <SignInForgotPassword />
    <SignInButton />
    <SignInFooter />
  </div>
);
