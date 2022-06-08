import React from 'react';
import { LabelText } from 'components';
import './style.css';

export const SignInForgotPassword = () => (
  <div className="wrapper">
    <div className="wrapper-checkbox">
      <input type="checkbox" />
    </div>
    <div className="wrapper-label">
      <LabelText text="Remember me" />
    </div>
    <div className="wrapper--forgot--password">
      <a href="http://www.google.com">
        <LabelText text="Forgot Password?" />
      </a>
    </div>
  </div>
);
