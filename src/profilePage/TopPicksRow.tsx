import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';

// ✅ Define ProfileType here (same as profilePage.tsx)
type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topicsConfig: Record<
  ProfileType,
  { title: string; imgSrc: string; route: string }[]
> = {
  recruiter: [
    { title: "Work Permit", imgSrc: "/images/topic-work-permit.jpeg", route: "/work-permit" },
    { title: "Skills", imgSrc: "/images/topic-skills.jpeg", route: "/skills" },
    { title: "Experience", imgSrc: "/images/topic-experience.jpeg", route: "/work-experience" },
    { title: "Certifications", imgSrc: "/images/topic-certifications.jpeg", route: "/certifications" },
    { title: "Recommendations", imgSrc: "/images/topic-recommendations.jpeg", route: "/recommendations" },
    { title: "Projects", imgSrc: "/images/topic-projects.jpeg", route: "/projects" },
    { title: "Contact Me", imgSrc: "/images/topic-contact-dev.jpeg", route: "/contact-me" }
  ],

  developer: [
    { title: "Skills", imgSrc: "/images/topic-skills-dev.jpeg", route: "/skills" },
    { title: "Projects", imgSrc: "/images/topic-projects-dev.jpeg", route: "/projects" },
    { title: "Certifications", imgSrc: "/images/topic-certifications-dev.jpeg", route: "/certifications" },
    { title: "Experience", imgSrc: "/images/topic-experience-dev.jpeg", route: "/work-experience" },
    { title: "Recommendations", imgSrc: "/images/topic-recommendation-devl.jpeg", route: "/recommendations" },
  { title: "Contact Me", imgSrc: "/images/topic-contact-devl.jpeg", route: "/contact-me" }
  ],

  stalker: [
    { title: "Recommendations", imgSrc: "/images/topic-recommendations-stalker.jpeg", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "/images/topic-contact-stalker.jpeg", route: "/contact-me" },
    { title: "Projects", imgSrc: "/images/topic-projects-stalker.jpeg", route: "/projects" },
    { title: "Experience", imgSrc: "/images/topic-experience-stalker.jpeg", route: "/work-experience" },
    { title: "Certifications", imgSrc: "/images/topic-certifications-stalker.jpeg", route: "/certifications" }
  ],

  adventure: [
     { title: "Work Permit", imgSrc: "/images/topic-work-permit-adventure.jpeg", route: "/work-permit" },
     { title: "Skills", imgSrc: "/images/topic-skills-adventure.jpeg", route: "/skills" },
      { title: "Experience", imgSrc: "/images/topic-experience-adventure.jpeg", route: "/work-experience" },
       { title: "Certifications", imgSrc: "/images/topic-certifications-adventure.jpeg", route: "/certifications" },
    { title: "Projects", imgSrc: "/images/topic-projects-adventure.jpeg", route: "/projects" },
   { title: "Recommendations", imgSrc: "/images/topic-recommendations-adventure.jpeg", route: "/recommendations" },
    { title: "Contact Me", imgSrc: "/images/topic-contact-adventure.jpeg", route: "/contact-me" }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topics = topicsConfig[profile];

  return (
    <div className="topics-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="pick-card"
            onClick={() => navigate(topic.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={topic.imgSrc} alt={topic.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{topic.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;

// ✅ This makes it a module (fixes isolatedModules error)
export {};
