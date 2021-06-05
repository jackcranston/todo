import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

const Filters = ({ filterTodos }) => {
  const [checkboxValues, setValues] = useState({
    active: true,
    complete: true,
  });

  const handleCheckboxChange = (event) => {
    setValues({
      ...checkboxValues,
      [event.target.value]: event.target.checked,
    });
    filterTodos(checkboxValues);
    console.log(checkboxValues);
  };
  /**
   * Issue here is that the DOM isn't updating after each change, it is delayed by one
   */

  return (
    <fieldset className="filters" data-testid="filters">
      <legend className="sr-only">Filters</legend>
      <label className="filters__label" htmlFor="filter-active">
        <input
          className="filters__input"
          id="filter-active"
          type="checkbox"
          name="filters"
          value="active"
          defaultChecked={checkboxValues.active}
          onChange={handleCheckboxChange}
          data-testid="filter-active"
        />
        Active
      </label>
      <label className="filters__label" htmlFor="filter-complete">
        <input
          className="filters__input"
          id="filter-complete"
          type="checkbox"
          name="filters"
          value="complete"
          defaultChecked={checkboxValues.complete}
          onChange={handleCheckboxChange}
          data-testid="filter-complete"
        />
        Complete
      </label>
    </fieldset>
  );
};

Filters.defaultProps = {
  filterTodos: () => {},
};

Filters.propTypes = {
  filterTodos: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  filterTodos: (filters) => dispatch({ type: 'FILTER_TODOS', filters }),
});

export default connect(null, mapDispatchToProps)(Filters);
