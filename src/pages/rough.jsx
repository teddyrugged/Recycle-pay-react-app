import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { AuthLayout } from 'layouts';

import {
  Button,
  Text,
  DashHeader,
  RightSidebar,
  Radio,
  InputDropdown,
  Input,
  SignUp,
  PickupSnipets,
  Welcome,
  SideBar,
} from 'components';

const ShowSidebar = () => {
  const sidebar = document.querySelector('.RightSidebar-container');
  sidebar.classList.remove('RightSidebar-inactive');
};

export const RoughPage = () => (
  <div>
    <SignUp />
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

    <h1>PICKUP SNIPET - OLUSHOLA AND FRANKLYN</h1>
    <PickupSnipets customer="Yemi Davis" date="12-3-2022" location="7, Asajon Way, Sangotedo" />

    <DashHeader />

    <br />
    <Button stretch btnType="primary" text="Open Sidebar" onClick={ShowSidebar} />
    <RightSidebar title="Pickup Information" btnText="Confirm Pickup">
      <Text text="Material Type" />
      <form action="" className="RightSidebar-form">
        <Radio text="Plastic" name="options" />
        <Radio text="Bottles" name="options" />
        <Radio text="Metal (Iron & Aluminium Scrap)" name="options" />
        <Radio text="Paper & Cardboard" name="options" />
        <Radio text="Tires" name="options" />
        <Radio text="Batteries & Electronics" name="options" />
      </form>
      <InputDropdown title="Estimated Weight" dropdown />
      <InputDropdown title="Pickup Address" />
      <InputDropdown title="Set Pickup Date" date />
    </RightSidebar>

    <br />

    <div className="wrapper">
      <div className="wrapper--title">
        <h1>Sign Up</h1>
      </div>

      <div className="flex-div relative">
        <BiSearch size={25} color="#04A405" className="bi-search absolute" />
        <Input inputType="lg" styleType="search-round" type="text" placeholder="e.g Search ID 16256" />
      </div>
    </div>
    <SideBar />
    <Welcome />
  </div>
);
