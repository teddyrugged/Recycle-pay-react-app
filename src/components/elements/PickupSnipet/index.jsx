import { Text } from 'components';
import PropTypes from 'prop-types';
import classes from './style.module.css';

export const PickupSnipet = ({ title, text }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <Text style={classes.title} text={title} />
      <Text style={classes.text} text={text} />
    </div>
  </div>
);

PickupSnipet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
