import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
  };

  const copyrightStyle = {
    margin: 0,
    fontSize: '14px',
  };

  return (
    <footer style={footerStyle}>
      <p style={copyrightStyle}>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;
