import React from 'react';
import './MusicPage.css';

const MusicPage: React.FC = () => {
  return (
    <div className="music-page">
      <h2 className="page-title">Refresh Your Mood</h2>
      <div className="playlist-wrapper">
        {/* Spotify Embed */}
        <iframe
          src="https://open.spotify.com/embed/playlist/0XZchmte79XFOlMJ814Brb?utm_source=generator"
          width="100%"
          height="500"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MusicPage;
