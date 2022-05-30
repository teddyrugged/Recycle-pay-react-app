import React from 'react';
import { Button } from 'components';

export const SignUpPage = () => (
  <div
    style={{
      padding: 20,
    }}
  >
    Sign Up Page
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 20,
      }}
    >
      <Button text="Yes" />
      <Button text="Click Me" />
      <Button btnType="primary" text="Click Alert" onClick={() => alert('Clicked')} />
      <Button btnType="secondary" text="Click Me" />
      <Button round btnType="primary" text="Click Me" />
      <Button round btnType="secondary" text="Secondary Rounded" />
      <Button stretch btnType="primary" text="Click Me" />
      <Button round stretch btnType="primary" text="Click Me" />
    </div>
  </div>
);
