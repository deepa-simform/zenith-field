import React from "react";
import { Typography } from "antd";
import "./PlaylistGrid.scss";

const { Title, Text } = Typography;

export interface PlaylistData {
  id: number;
  title: string;
  description: string;
  coverImage?: string;
  backgroundColor?: string;
}

export interface PlaylistGridProps {
  className?: string;
}

const playlists: PlaylistData[] = [
  {
    id: 1,
    title: "Playlist 1",
    description: "Description of playlist",
    backgroundColor: "#4A5568",
  },
  {
    id: 2,
    title: "Playlist 2",
    description: "Description of playlist",
    backgroundColor: "#FFEE93",
  },
  {
    id: 3,
    title: "Playlist 3",
    description: "Description of playlist",
    backgroundColor: "#FFC1C1",
  },
  {
    id: 4,
    title: "Playlist 4",
    description: "Description of playlist",
    backgroundColor: "#F5F5F5",
  },
];

const PlaylistGrid: React.FC<PlaylistGridProps> = ({ className }) => {
  return (
    <div className={`playlist-grid ${className || ""}`}>
      {playlists.map((playlist) => (
        <div key={playlist.id} className="playlist-grid__card">
          <div
            className="playlist-grid__cover"
            style={{ backgroundColor: playlist.backgroundColor }}
          >
            <div className="playlist-grid__cover-title">{playlist.title}</div>
          </div>
          <div className="playlist-grid__info">
            <Title level={4} className="playlist-grid__title">
              {playlist.title}
            </Title>
            <Text className="playlist-grid__description">
              {playlist.description}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlaylistGrid;
