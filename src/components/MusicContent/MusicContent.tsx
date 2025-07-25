import React from "react";
import { Button, Typography } from "antd";
import MusicNavigation from "../MusicNavigation/MusicNavigation";
import PlaylistGrid from "../PlaylistGrid/PlaylistGrid";
import AlbumGrid from "../AlbumGrid/AlbumGrid";
import "./MusicContent.scss";

const { Title, Text } = Typography;

export interface MusicContentProps {
  className?: string;
}

const MusicContent: React.FC<MusicContentProps> = ({ className }) => {
  return (
    <div className={`music-content ${className || ""}`}>
      {/* Navigation */}
      <MusicNavigation />

      {/* Main Content */}
      <div className="music-content__main">
        {/* Playlist Section */}
        <div className="music-content__section">
          <div className="music-content__section-header">
            <Title level={2} className="music-content__section-title">
              Title
            </Title>
            <Text className="music-content__section-subtitle">Subheading</Text>
          </div>
          <PlaylistGrid />
        </div>

        {/* Album Section */}
        <div className="music-content__section">
          <div className="music-content__section-header">
            <Title level={2} className="music-content__section-title">
              Title
            </Title>
            <Text className="music-content__section-subtitle">Subheading</Text>
          </div>
          <AlbumGrid />
        </div>
      </div>
    </div>
  );
};

export default MusicContent;
