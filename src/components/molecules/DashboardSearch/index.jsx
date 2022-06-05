import React from 'react';
import { Input } from 'components';
import './style.css';

export const DashboardSearch = () => (
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
);
