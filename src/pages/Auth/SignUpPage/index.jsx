import React from 'react';
import { Button, Text } from 'components';
import { AuthLayout } from 'layouts';

export const SignUpPage = () => (
  <div
    style={{
      padding: 20,
    }}
  >
    <AuthLayout>
      <Text size={20}>Reset password</Text>
      <Text size={24}>
        We’ve sent an email to you.
        <br /> Kindly activate your account from the link in the email sent.
      </Text>
      <Button stretch btnType="primary" text="Resend Recovery Link" />
    </AuthLayout>

    <AuthLayout>
      <Text size={20}>Reset password</Text>
      <Text size={24}>
        Hi Yemi,
        <br /> A request was made to reset your password. If you made this request, please continue.
      </Text>
      <Button stretch btnType="primary" text="Yes, continue" />
    </AuthLayout>

    <AuthLayout>
      <Text size={20}>Reset password</Text>
      <Text size={24}>Hi Yemi,Your password has been successfully reset.</Text>
      <Button stretch btnType="primary" text="Sign in" />
    </AuthLayout>
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
