import React from 'react';

import './index.scss';

const Sort = () => (
  <fieldset className="sort">
    <label className="sort__label" htmlFor="sort">
      <span className="sr-only">Sort</span>
      <select
        className="sort__select"
        id="sort"
        name="sort"
        defaultValue="default"
      >
        <option value="default" disabled>
          Sort
        </option>
        <option value="title">Title</option>
        <option value="created-asc">Created ASC</option>
        <option value="created-dec">Created DEC</option>
      </select>
    </label>
  </fieldset>
);

export default Sort;
