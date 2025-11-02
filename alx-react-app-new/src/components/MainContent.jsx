import React from 'react';

const MainContent = ({ children, cities = [] }) => {
  const mainStyle = {
    padding: '16px',
    maxWidth: '800px',
    margin: '12px auto',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
  };

  return (
    <main style={mainStyle}>
      {children}
      {cities.length > 0 && (
        <ul>
          {cities.map((city, idx) => (
            <li key={idx}>{city}</li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MainContent;