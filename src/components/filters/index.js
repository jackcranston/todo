import React from 'react';

import './index.scss';

const Filters = () => (
  <fieldset className="filters">
    <legend className="sr-only">Filters</legend>
    <label className="filters__label" htmlFor="filter-active">
      <input
        className="filters__input"
        id="filter-active"
        type="checkbox"
        name="filters"
        value="active"
        defaultChecked
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
        defaultChecked
      />
      Complete
    </label>
  </fieldset>
);

export default Filters;
