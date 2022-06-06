import React from 'react';
import { Divider, GoogleButton, MainFooterText } from 'components';
import './style.css';

export const SignInFooter = () => (
  <div className="wrapper--Footer">
    <div className="wrapper--divider">
      <Divider text="OR" />
    </div>
    <div className="wrapper--google">
      <GoogleButton text="Continue with Google" />
    </div>
    <div className="wrapper--footer--text">
      <MainFooterText link="#" text1="Don’t have an account?" text2="Sign Up" />
    </div>
  </div>
);
