import { CustomerName, SearchBar } from 'components';
import PropTypes from 'prop-types';
import classes from './style.module.css';

export const TopNav = ({ name }) => {
  <main className={classes.container}>
    <section className={classes.wrapper}>
      <SearchBar />
      <CustomerName name={name} />
    </section>
  </main>;
};

TopNav.propTypes = {
  name: PropTypes.string,
};
