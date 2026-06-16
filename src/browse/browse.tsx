import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import blueImage from '../images/blue.png';
import greyImage from '../images/grey.png';
import redImage from '../images/red.png';
import yellowImage from '../images/yellow.png';
import './browse.css';

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const profiles = [
    {
      name: "recruiter",
      image: blueImage,
      video: "/videos/recruiter.mp4"   // ✅ local mp4 instead of giphy
    },
    {
      name: "developer",
      image: greyImage,
      video: "/videos/developer.mp4"
    },
    {
      name: "stalker",
      image: redImage,
      video: "/videos/stalker.mp4"
    },
    {
      name: "adventure",
      image: yellowImage,
      video: "/videos/adventure123.mp4"
    },
  ];

  const handleProfileClick = (profile: { name: string; image: string; video: string }) => {
    navigate(`/profile/${profile.name}`, { state: { profileImage: profile.image, video: profile.video } });
  };

  return (
    <div className="browse-container">
      <p className='who-is-watching'>Who's Watching?</p>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </div>
    </div>
  );
};

export default Browse;
