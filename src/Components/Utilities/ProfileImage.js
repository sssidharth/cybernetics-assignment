import React from 'react';

const ProfileImage = ({ src, alt = 'Profile Image', className }) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={src}
        alt={alt}
        className={`rounded-full object-cover border border-border_color shadow-sm ${className}`}
      />
    </div>
  );
};

export default ProfileImage;