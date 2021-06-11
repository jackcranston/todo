import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

export const Sort = ({ sort, sortTodos }) => (
  <fieldset className="sort">
    <label htmlFor="sort">
      <span className="sr-only">Sort by</span>
      <select
        className="sort__select"
        id="sort"
        data-testid="sort"
        name="sort"
        defaultValue={sort}
        onChange={(event) => sortTodos(event.target.value)}
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

Sort.defaultProps = {
  sort: 'default',
  sortTodos: () => {},
};

Sort.propTypes = {
  sort: PropTypes.string,
  sortTodos: PropTypes.func,
};

const mapStateToProps = (state) => ({ sort: state.globals.sort });

const mapDispatchToProps = (dispatch) => ({
  sortTodos: (sort) => dispatch({ type: 'SORT_TODOS', sort }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
