import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    borderRadius: '6px',
  };

  return (
    <header style={headerStyle}>
      <h1>My Favorite Cities</h1>
    </header>
  );
};

export default Header;