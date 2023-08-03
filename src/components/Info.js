import React from 'react';

const Info = ({ name, bio, email, website }) => {
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>{email}</p>
      {website && <p>Website: <a href={website}>{website}</a></p>}
    </div>
  );
};

export default Info;