import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { PickupSnipet, Button } from 'components/elements';
import classes from './style.module.css';

export const PickupSnipets = ({ customer, date, location }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <div className={classes.dot_wrapper}>
        <div className={classes.dot} />
      </div>
      <PickupSnipet title="Name of Customer" text={customer} />
      <PickupSnipet title="Pickup Date" text={date} />
      <PickupSnipet title="Pickup Location" text={location} />
      <div>
        <Button round btnType="secondary" text="Request Pickup" />
      </div>
    </div>
  </div>
);

PickupSnipets.propTypes = {
  customer: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};
