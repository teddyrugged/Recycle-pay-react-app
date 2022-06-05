import PropTypes from 'prop-types';

import './style.css';

const basePropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export const RightSidebar = ({ title, children }) => (
  <div className="RightSidebar-container">
    <div className="RightSidebar-title">
      <i className="fa fa-caret-left" />
      <p>{title}</p>
    </div>
    {children}
  </div>
);

RightSidebar.propTypes = {
  ...basePropTypes,
};
