// src/components/ProfileCard.tsx
import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  return (
    <div className="profile-card" onClick={onClick}>
      <div className="image-container">
        <img src={image} alt={`${name} profile`} className="profile-image" />
      </div>
      {/* ✅ Force name below the image */}
      <div className="profile-name">{name}</div>
    </div>
  );
};

export default ProfileCard;
