import React from "react";
import { Typography, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  SearchOutlined,
  SoundOutlined,
  UnorderedListOutlined,
  CustomerServiceOutlined,
  SmileOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import "./MusicSidebar.scss";

const { Title, Text } = Typography;

export interface MusicSidebarProps {
  className?: string;
}

const MusicSidebar: React.FC<MusicSidebarProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleMenuClick = (key: string) => {
    if (key === "chat") {
      navigate("/Chat");
    }
  };

  const discoverItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
      className: "music-sidebar__menu-item--active",
    },
    {
      key: "browse",
      icon: <SearchOutlined />,
      label: "Browse",
    },
    {
      key: "radio",
      icon: <SoundOutlined />,
      label: "Radio",
    },
  ];

  const libraryItems = [
    {
      key: "playlists",
      icon: <UnorderedListOutlined />,
      label: "Playlists",
    },
    {
      key: "songs",
      icon: <CustomerServiceOutlined />,
      label: "Songs",
    },
    {
      key: "personalized",
      icon: <SmileOutlined />,
      label: "Personalized picks",
    },
  ];

  const additionalItems = [
    {
      key: "chat",
      icon: <MessageOutlined />,
      label: "Chat",
    },
  ];

  return (
    <div className={`music-sidebar ${className || ""}`}>
      {/* App Title */}
      <div className="music-sidebar__header">
        <Title level={3} className="music-sidebar__title">
          Music app
        </Title>
      </div>

      {/* Discover Section */}
      <div className="music-sidebar__section">
        <Text className="music-sidebar__section-title">Discover</Text>
        <Menu
          className="music-sidebar__menu"
          mode="vertical"
          selectedKeys={["home"]}
          items={discoverItems}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </div>

      {/* Library Section */}
      <div className="music-sidebar__section">
        <Text className="music-sidebar__section-title">Library</Text>
        <Menu
          className="music-sidebar__menu"
          mode="vertical"
          items={libraryItems}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </div>

      {/* Additional Section */}
      <div className="music-sidebar__section">
        <Menu
          className="music-sidebar__menu"
          mode="vertical"
          items={additionalItems}
          onClick={({ key }) => handleMenuClick(key)}
        />
      </div>
    </div>
  );
};

export default MusicSidebar;
