import PropTypes from 'prop-types';
import classes from './style.module.css';

export const CustomerName = ({ name }) => {
  <main className={classes.container}>
    <section className={classes.wrapper}>
      <p className="name">{name}</p>
      <p className="initial">{name.slice(0, 1)}</p>
    </section>
  </main>;
};

CustomerName.propTypes = {
  name: PropTypes.string,
};
