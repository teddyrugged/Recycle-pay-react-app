import React from 'react';
import 'layouts/layout.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const DashboardLayout = ({ children, sidebarClassName, bodyClassName }) => (
  <>
    <div className={clsx('left-sidebar', sidebarClassName)}>{children}</div>

    <div className={clsx('main', bodyClassName)}>{children}</div>
  </>
);

DashboardLayout.propTypes = {
  children: PropTypes.node,
  sidebarClassName: PropTypes.string,
  bodyClassName: PropTypes.string,
};
