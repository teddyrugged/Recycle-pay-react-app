import React from 'react';
import {
  SignUpTitle,
  SignUpButton,
  SignUpEmail,
  SignUpName,
  SignUpPassword,
  SignUpPhone,
  SignUpFooter,
} from 'components';
import './style.css';

export const SignUp = () => (
  <div>
    <SignUpTitle />
    <SignUpName />
    <SignUpEmail />
    <SignUpPhone />
    <SignUpPassword />
    <SignUpButton />
    <SignUpFooter />
  </div>
);
