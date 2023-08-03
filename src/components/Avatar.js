import React from 'react';

const Avatar = ({ imageUrl, altText }) => {
  return <img src={imageUrl} alt={altText} className="avatar" />;
};

export default Avatar;