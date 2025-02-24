import React from 'react';
import PropTypes from 'prop-types';

function Header({branding}) {
  return (
    <div id="title">
      <h1>{branding}</h1>  {/* Display the 'branding' prop */}
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string
};
export default Header;
