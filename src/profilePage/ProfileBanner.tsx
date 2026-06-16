import React from "react";
import "./ProfileBanner.css";
import PlayButton from "../components/PlayButton";
import MoreInfoButton from "../components/MoreInfoButton";

const ProfileBanner: React.FC = () => {
  // 🔥 Your own static profile data
  const bannerData = {
    headline: "Pawan Choudhary-Backend Developer",
    profileSummary:
      "Aspiring backend developer and future full-stack software engineer with a deep passion for problem solving, scalable applications, and continuous learning. I also love editing, design, and exploring how technology can impact lives.",
    resumeLink: "/resume.pdf", // 👉 put your resume file in the public/ folder
    linkedinLink: "https://www.linkedin.com/in/pawan-choudhary-a61a61383/",
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, "_blank");
  };

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline">{bannerData.headline}</h1>
        <p className="banner-description">{bannerData.profileSummary}</p>

        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
