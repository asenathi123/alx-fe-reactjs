import React from 'react';

const UserProfile = (props) => {
  const containerStyle = {
    border: '1px solid #ccc',
    padding: '12px',
    margin: '12px',
    borderRadius: '6px',
    maxWidth: '320px',
    backgroundColor: '#f9f9f9',
  };

  const nameStyle = {
    color: '#1e90ff',
    margin: '0 0 8px 0',
  };

  const ageStyle = {
    fontWeight: 'bold',
    color: '#333',
  };

  const bioStyle = {
    color: '#555',
    lineHeight: '1.4',
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
};

export default UserProfile;
