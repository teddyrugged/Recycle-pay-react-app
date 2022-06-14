import React from 'react';
import { Text, Input, Button } from 'components';
import { Link } from 'react-router-dom';
import './style.css';

export const SignIn = () => (
  <div>
    <div className="signin-wrapper-signin-title">
      <Text.Heading text="Sign In" size={24} weight={500} level={1} />
    </div>
    <div className="signin-wrapper-email">
      <Text.Heading text="Email Address" size={16} weight={450} level={3} />
      <Input.FullRound type="email" placeholder="" />
    </div>
    <div className="signin-wrapper-password">
      <Text.Heading text="Password" size={16} weight={450} level={3} />
      <Input.FullRound type="password" placeholder="" />
    </div>
    <div className="signin-wrapper-remember-me">
      <Text.RememberMe />
    </div>
    <div className="signin-wrapper-button">
      <Button.MainGreen text="Sign In" />
    </div>
    <div className="signin-wrapper-divider">
      <Text.Divider text="OR" />
    </div>
    <div className="signin-wrapper-google-button">
      <Button.GoogleBtn text="Continue with Google" />
    </div>
    <div className="signin-main-footer-text">
      <Text.Heading text="Don't have an account?" color="grey" size={14} weight={500} level={4} />
      <Link to="/">
        <Text.Heading text="Sign Up" color="green" size={14} weight={500} level={4} />
      </Link>
    </div>
  </div>
);
