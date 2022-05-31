import PropTypes from 'prop-types';
import classes from './style.css';

const PickupSnipet = ({ title, text }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <p>{title}</p>
      <p>{text}</p>
    </div>
  </div>
);

PickupSnipet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
