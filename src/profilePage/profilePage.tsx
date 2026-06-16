// src/profilePage/ProfilePage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import "./ProfilePage.css";

import ProfileBanner from "./ProfileBanner";
import TopPicksRow from "./TopPicksRow";
import ContinueWatching from "./ContinueWatching";

// Allowed profiles
type ProfileType = "recruiter" | "developer" | "stalker" | "adventure";

// Map each profile to its video in /public/videos/
const profileVideos: Record<ProfileType, string> = {
  recruiter: "/videos/recruiter.mp4",
  developer: "/videos/developer.mp4",
  stalker: "/videos/stalker.mp4",
  adventure: "/videos/adventure.mp4", // ✅ make sure file exists in /public/videos/
};

const ProfilePage: React.FC = () => {
  const { profileName } = useParams<{ profileName: string }>();

  // Fallback if profileName is invalid
  const validProfiles: ProfileType[] = ["recruiter", "developer", "stalker", "adventure"];
  const profile: ProfileType = validProfiles.includes(profileName as ProfileType)
    ? (profileName as ProfileType)
    : "recruiter";

  const videoSrc = profileVideos[profile];

  return (
    <>
      <div className="profile-page">
        {/* 🎥 Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Banner content */}
        <ProfileBanner />
      </div>

      {/* Rows */}
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
