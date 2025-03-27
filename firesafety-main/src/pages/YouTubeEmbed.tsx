// YouTubeEmbed.tsx
import React from 'react';
import YouTube from 'react-youtube';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId, title }) => {
  const opts = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="rounded-lg mt-2">
      <YouTube videoId={videoId} opts={opts} title={title} className="w-full h-64" />
    </div>
  );
};

export default YouTubeEmbed;
