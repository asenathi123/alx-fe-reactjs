import React from 'react';

function UserProfile(props) {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '12px',
    margin: '12px',
    borderRadius: '8px',
    maxWidth: '320px',
    backgroundColor: '#f9f9ff',
  };

  const nameStyle = {
    color: '#1a73e8',
    fontSize: '20px',
    margin: '0 0 8px 0',
  };

  const ageStyle = {
    fontWeight: 700,
    color: '#333',
  };

  const bioStyle = {
    color: '#444',
    lineHeight: 1.4,
    marginTop: '8px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{props.name}</h2>
      <p>
        Age: <span style={ageStyle}>{props.age}</span>
      </p>
      <p style={bioStyle}>Bio: {props.bio}</p>
    </div>
  );
}

export default UserProfile;