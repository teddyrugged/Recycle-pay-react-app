import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { Button, Text } from 'components/elements';

import './style.css';

const PickupSnipet = ({ title, text }) => (
  <div className="snipet__container">
    <div className="snipet__wrapper">
      <Text className="snipet__title" text={title} />
      <Text className="snipet__text" text={text} />
    </div>
  </div>
);

PickupSnipet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export const PickupSnipets = ({ customer, date, location }) => (
  <div className="container">
    <div className="wrapper">
      <div className="sub-wrapper name">
        <div className="dot_wrapper">
          <div className="dot" />
        </div>
        <PickupSnipet title="Name of Customer" text={customer} />
      </div>
      <div className="sub-wrapper">
        <PickupSnipet title="Pickup Date" text={date} />
        <PickupSnipet title="Pickup Location" text={location} />
      </div>
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
