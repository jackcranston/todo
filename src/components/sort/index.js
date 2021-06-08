import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

const Sort = ({ sortTodos }) => {
  const [selectValue, setValue] = useState('');

  const handleSelectChange = (event) => {
    setValue(event.target.value);
    sortTodos(selectValue);
  };

  return (
    <fieldset className="sort">
      <label htmlFor="sort">
        <span className="sr-only">Sort by</span>
        <select
          className="sort__select"
          id="sort"
          data-testid="sort"
          name="sort"
          defaultValue={selectValue}
          onChange={handleSelectChange}
        >
          <option value="default" disabled>
            Sort
          </option>
          <option value="ASC">ASC</option>
          <option value="DSC">DSC</option>
        </select>
      </label>
    </fieldset>
  );
};

Sort.defaultProps = {
  sortTodos: () => {},
};

Sort.propTypes = {
  sortTodos: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  sortTodos: (sort) => dispatch({ type: 'SORT_TODOS', sort }),
});

export default connect(null, mapDispatchToProps)(Sort);
