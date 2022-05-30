import React from 'react';
import { Button, Text } from 'components';

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
      <h1>Typography</h1>
      <div>
        <Text size={50}>Hello</Text>
        <Text text="Hey there" />
        <Text.Heading text="Hey there I am a heading" />
        <Text.Heading level={2} text="Hey there I am a heading 2" />

        <Text.Heading size={40} weight={500} text="Hey there I am a heading 2" />
      </div>
    </div>
  </div>
);
