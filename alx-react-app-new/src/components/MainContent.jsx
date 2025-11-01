import React from 'react';

function MainContent() {
  const mainStyle = {
    maxWidth: '800px',
    margin: '20px auto',
    padding: '24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    lineHeight: '1.6',
  };

  const paragraphStyle = {
    marginBottom: '16px',
    color: '#333',
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;
