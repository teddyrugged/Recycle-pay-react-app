import PropTypes from 'prop-types';

import './style.css';

const basePropTypes = {
  title: PropTypes.string,
};

export const RightSidebar = ({ title }) => (
  <div className="RightSidebar-container">
    <div className="RightSidebar-title">
      <i className="fa fa-caret-left" />
      <p>{title}</p>
    </div>
  </div>
);

RightSidebar.propTypes = {
  ...basePropTypes,
};
