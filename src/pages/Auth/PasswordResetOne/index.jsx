import { Button, Text, Input } from 'components';
import { Link } from 'react-router-dom';
import React from 'react';

export const PasswordResetOne = () => (
  <div className="wrapper-container">
    <Text.Heading text="Reset Password" size={24} weight={500} level={1} />
    <div className="wrapper--email">
      <div className="wrapper--label--email">
        <Text text="Enter your Email Address" />
      </div>
      <div className="wrapper--input--email">
        <Input.FullRound name="email" type="email" placeholder="info@recyclepay.com" />
      </div>
    </div>
    <Button stretch btnType="primary" text="Send Recovery Link" />
    <div className="signin-main-footer-text">
      <Text.Heading text="Don't have an account?" color="grey" size={14} weight={500} level={4} />
      <Link to="/signup">
        <Text.Heading text="Sign Up" color="green" size={14} weight={500} level={4} />
      </Link>
    </div>
  </div>
);
