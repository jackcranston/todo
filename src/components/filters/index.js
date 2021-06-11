import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './index.scss';

export const Filters = ({ filters, filterTodos }) => (
  <fieldset className="filters" data-testid="filters">
    <legend className="sr-only">Filters</legend>
    <label className="filters__label" htmlFor="filter-active">
      <input
        className="filters__input"
        id="filter-active"
        type="checkbox"
        name="filters"
        value="active"
        defaultChecked={filters.active}
        onChange={() => filterTodos({active: !filters.active, complete: filters.complete})}
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
        defaultChecked={filters.complete}
        onChange={() => filterTodos({active: filters.active, complete: !filters.complete})}
        data-testid="filter-complete"
      />
      Complete
    </label>
  </fieldset>
);

Filters.defaultProps = {
  filters: {
    active: true,
    complete: true,
  },
  filterTodos: () => {},
};

Filters.propTypes = {
  filters: PropTypes.shape({
    active: PropTypes.bool,
    complete: PropTypes.bool,
  }),
  filterTodos: PropTypes.func,
};

const mapStateToProps = (state) => state.globals;

const mapDispatchToProps = (dispatch) => ({
  filterTodos: (filters) => dispatch({ type: 'FILTER_TODOS', filters }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
