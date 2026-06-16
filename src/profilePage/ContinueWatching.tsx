import React from 'react';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig: Record<
  ProfileType,
  { title: string; imgSrc: string; link: string }[]
> = {
  recruiter: [
    { title: "Music", imgSrc: "/images/music-recruiter.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/reading-recruiter.jpeg", link: "/reading" },
    { title: "Contact Me", imgSrc: "/images/contact-recruiter.jpeg", link: "/contact-me" }
  ],
  developer: [
    { title: "Music", imgSrc: "/images/music-developer.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/reading-developer.jpeg", link: "/reading" },
    { title: "Certifications", imgSrc: "/images/certifications-developer.jpeg", link: "/certifications" },
    { title: "Contact Me", imgSrc: "/images/contact-developer.jpeg", link: "/contact-me" }
  ],
  stalker: [
    { title: "Reading", imgSrc: "/images/reading-stalker.jpeg", link: "/reading" },
    { title: "Contact Me", imgSrc: "/images/contact-stalker.jpeg", link: "/contact-me" }
  ],
  adventure: [
    { title: "Music", imgSrc: "/images/music-adventure.jpg", link: "/music" },
    { title: "Reading", imgSrc: "/images/reading-adventure.jpeg", link: "/reading" },
    { title: "Certifications", imgSrc: "/images/certifications-adventure.jpeg", link: "/certifications" },
    { title: "Contact Me", imgSrc: "/images/contact-adventure.jpeg", link: "/contact-me" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <a href={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
