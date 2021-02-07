import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { text } = props;

  return <h1 data-testid="header">{text}</h1>;
};

Header.defaultProps = {
  text: '',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
