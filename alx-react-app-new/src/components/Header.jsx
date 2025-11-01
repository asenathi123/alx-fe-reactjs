import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  const titleStyle = {
    fontSize: '28px',
    margin: 0,
  };

  return (
    <header style={headerStyle}>
      <h1 style={titleStyle}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;