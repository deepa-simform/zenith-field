import React from "react";
import { Typography } from "antd";
import "./AlbumGrid.scss";

const { Title, Text } = Typography;

export interface AlbumData {
  id: number;
  artistName: string;
  genre: string;
  coverImage?: string;
  backgroundColor?: string;
}

export interface AlbumGridProps {
  className?: string;
}

const albums: AlbumData[] = [
  {
    id: 1,
    artistName: "Artist Name",
    genre: "R&B",
    backgroundColor: "#E8E8E8",
  },
  {
    id: 2,
    artistName: "Artist Name",
    genre: "Indie pop",
    backgroundColor: "#B8E6B8",
  },
  {
    id: 3,
    artistName: "Artist Name",
    genre: "Hip hop",
    backgroundColor: "#FFB366",
  },
  {
    id: 4,
    artistName: "Artist Name",
    genre: "Electronic",
    backgroundColor: "#A8A8A8",
  },
  {
    id: 5,
    artistName: "Artist Name",
    genre: "R&B",
    backgroundColor: "#DDA0DD",
  },
  {
    id: 6,
    artistName: "Artist Name",
    genre: "Rock",
    backgroundColor: "#CD5C5C",
  },
];

const AlbumGrid: React.FC<AlbumGridProps> = ({ className }) => {
  return (
    <div className={`album-grid ${className || ""}`}>
      {albums.map((album) => (
        <div key={album.id} className="album-grid__card">
          <div
            className="album-grid__cover"
            style={{ backgroundColor: album.backgroundColor }}
          />
          <div className="album-grid__info">
            <Title level={5} className="album-grid__artist">
              {album.artistName}
            </Title>
            <Text className="album-grid__genre">{album.genre}</Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumGrid;
