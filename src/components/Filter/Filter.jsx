import React from "react";
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/contacts/filter";
import { getFilter } from "redux/contacts/selectors";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.label}>Find contacts by Name </label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;