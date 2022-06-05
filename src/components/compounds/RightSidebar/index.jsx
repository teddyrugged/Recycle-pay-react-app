import PropTypes from 'prop-types';

import './style.css';

const basePropTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const HideSidebar = () => {
  const sidebar = document.querySelector('.RightSidebar-container');
  sidebar.classList.toggle('RightSidebar-inactive');
};

export const RightSidebar = ({ title, children }) => (
  <div className="RightSidebar-container">
    <div className="RightSidebar-title" onClick={HideSidebar} onKeyPress={HideSidebar} aria-hidden="true">
      <i className="fa fa-caret-left" />
      <p>{title}</p>
    </div>
    {children}
  </div>
);

RightSidebar.propTypes = {
  ...basePropTypes,
};
