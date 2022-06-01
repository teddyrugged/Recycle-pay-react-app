import React from 'react';
import { Button, Text, Input } from 'components';
import { BiSearch } from 'react-icons/bi';
import { TbMinusVertical } from 'react-icons/tb';
import { AuthLayout } from 'layouts';

export const SignUpPage = () => (
  <div
    style={{
      padding: 20,
    }}
  >
    <AuthLayout>
      <Button text="Yes" />
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
    <hr />
    <br />
    <br />
    <br />
    <div className="wrapper">
      <div className="wrapper--title">
        <h1>Sign Up</h1>
      </div>
      <div className="wrapper--name">
        <div>
          <p style={{ margin: '0px 0px 10px 10px' }}>First Name</p>
          <Input inputType="sm" styleType="l-round" type="text" placeholder="First Name" />
        </div>
        <div>
          <p style={{ margin: '0px 0px 10px 10px' }}>Last Name</p>
          <Input inputType="sm" styleType="r-round" placeholder="Last Name" />
        </div>
      </div>
      <p style={{ margin: '0 0 -10px 10px' }}>Email Address</p>
      <Input inputType="lg" styleType="full-round" type="email" placeholder="Email" />
      <p style={{ margin: '0 0 -10px 10px' }}>Phone Number</p>
      <div className="flex-div relative">
        <p className="phone absolute">+234</p>
        <TbMinusVertical className="line absolute" size={50} />
        <Input
          style={{ paddingLeft: 70 }}
          inputType="lg"
          styleType="full-round"
          type="tel"
          pattern="[0-9]{4}[0-9]{3}[0-9]{4}"
          placeholder="08000000000"
        />
      </div>
      <div className="flex-div relative">
        <BiSearch size={25} color="#04A405" className="bi-search absolute" />
        <Input inputType="lg" styleType="search-round" type="text" placeholder="e.g Search ID 16256" />
      </div>
    </div>
  </div>
);
