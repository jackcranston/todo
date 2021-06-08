import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

const Filters = ({ filterTodos }) => {
  const [checkboxValues, setValues] = useState({
    active: true,
    complete: true,
  });

  /**
   * issue here is partially down to not having single
   * source of truth, we have two separate states, a localised one
   * in the component as well as the store... this may be causing
   * mismatching state.
   */

  const handleCheckboxChange = (event) => {
    setValues({
      ...checkboxValues,
      [event.target.value]: event.target.checked,
    });
    filterTodos(checkboxValues);
  };

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
          onChange={(event) => handleCheckboxChange(event)}
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
          onChange={(event) => handleCheckboxChange(event)}
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
