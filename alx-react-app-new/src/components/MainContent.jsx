import React from 'react';

function MainContent() {
  const mainStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
  };

  const paragraphStyle = {
    color: '#333',
    lineHeight: 1.6,
    fontSize: '16px',
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
