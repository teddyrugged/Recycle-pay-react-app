import PropTypes from 'prop-types';

const basePropTypes = {
  title: PropTypes.string,
};

export const RightSidebar = ({ title }) => (
  <div className="right_bar">
    <p className="title">{title}</p>
  </div>
);

RightSidebar.propTypes = {
  ...basePropTypes,
};
