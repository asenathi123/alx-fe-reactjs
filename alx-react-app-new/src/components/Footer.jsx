import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '15px',
    marginTop: '20px',
  };

  const textStyle = {
    margin: 0,
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;
