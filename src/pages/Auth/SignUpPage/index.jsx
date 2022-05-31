import React from 'react';
import { Button, Text, Input } from 'components';

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
    <hr />
    <div style={{ display: 'flex', flexDirection: 'column', padding: 20, flexWrap: 'wrap', gap: 20 }}>
      <p>First Name</p>
      <Input inputType="sm-form-input form-input" styleType="left-round" type="text" placeholder="First Name" />
      <p>Last Name</p>
      <Input inputType="sm-form-input form-input" styleType="right-round" placeholder="Last Name" />
      <p>Email Address</p>
      <Input inputType="lg-form-input form-input" styleType="full-round" type="email" placeholder="Email" />
      <p>Phone Number</p>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Input inputType="xs-form-input form-input" styleType="left-round" type="text" value="+234" disabled />
        <Input
          inputType="md-form-input form-input"
          styleType="right-round"
          type="tel"
          pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
          placeholder="08000000000"
        />
      </div>
    </div>
  </div>
);
