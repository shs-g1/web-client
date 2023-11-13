// components/Atom/profile-image/index.js
import React from 'react';

const ProfileImage = ({ imageUrl }) => {
  return <img src={imageUrl} alt="프로필 사진" />;
};

export default ProfileImage;