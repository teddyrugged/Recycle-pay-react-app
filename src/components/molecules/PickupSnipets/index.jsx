import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { PickupSnipet, Button } from '../elements';
import classes from './style.css';

export const PickupSnipets = ({ customer, date, location }) => (
  <div className={classes.container}>
    <div className={classes.wrapper}>
      <div>
        <div />
      </div>
      <PickupSnipet title="Name of Customer" text={customer} />
      <PickupSnipet title="Name of Customer" text={date} />
      <PickupSnipet title="Pickup Location" text={location} />
      <div>
        <Button rounded BntType="secondary" text="Request Pickup" />
      </div>
    </div>
  </div>
);

PickupSnipets.propTypes = {
  customer: PropTypes.string,
  date: PropTypes.string,
  location: PropTypes.string,
};
