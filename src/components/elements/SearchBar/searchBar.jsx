import { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './style.module.css';

export const SearchBar = ({ terms }) => {
  const [search, setSearch] = useState([]);

  const onChangeHandler = (e) => {
    const itemID = e.target.value;
    const items = search.filter((item) => item.id === itemID);
    setSearch(items);
  };

  <main className={classes.container}>
    <section className={classes.wrapper}>
      <i className="fa fa-search" />
      <input type="search" placeholder="e.g Seard ID 16256" value={terms} onChange={onChangeHandler} />
    </section>
  </main>;
};

SearchBar.propTypes = {
  text: PropTypes.string,
};
