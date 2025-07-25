import React from "react";
import { Avatar, Typography, Button, List } from "antd";
import {
  SearchOutlined,
  PictureOutlined,
  MoreOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./Profile.scss";

const { Title, Text } = Typography;

export interface ProfileProps {
  onClose?: () => void;
  chatId?: number;
  className?: string;
}

// Mock data - in real app this would come from props or context
const getProfileData = (chatId: number) => {
  const profileData = {
    1: {
      name: "Helena",
      status: "Active 20m ago",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2F7953c2282f53412aadd862bf64386aa5%2Ffba0cefa60cd40c0b03ca1141a6e5099",
    },
    2: { name: "Carlo", status: "Online", avatar: "" },
    3: { name: "Oscar", status: "Last seen 1h ago", avatar: "" },
    // Add more as needed
  };
  return profileData[chatId as keyof typeof profileData] || profileData[1];
};

const menuItems = [
  {
    id: 1,
    icon: <SearchOutlined />,
    label: "Search chat",
  },
  {
    id: 2,
    icon: <PictureOutlined />,
    label: "Sent images",
  },
  {
    id: 3,
    icon: <MoreOutlined />,
    label: "More options",
  },
];

const Profile: React.FC<ProfileProps> = ({
  onClose,
  chatId = 1,
  className,
}) => {
  const profileData = getProfileData(chatId);

  return (
    <div className={`profile ${className || ""}`}>
      {/* Close button for mobile/tablet */}
      {onClose && (
        <Button
          type="text"
          icon={<CloseOutlined />}
          className="profile__close-btn"
          onClick={onClose}
        />
      )}

      {/* Profile Info */}
      <div className="profile__info">
        <Avatar
          size={210}
          src={profileData.avatar}
          className="profile__avatar"
        />
        <div className="profile__details">
          <Title level={3} className="profile__name">
            {profileData.name}
          </Title>
          <Text className="profile__status">{profileData.status}</Text>
        </div>
        <Button type="primary" className="profile__view-btn" block>
          View profile
        </Button>
      </div>

      {/* Menu Options */}
      <div className="profile__menu">
        <List
          className="profile__menu-list"
          itemLayout="horizontal"
          dataSource={menuItems}
          renderItem={(item) => (
            <List.Item className="profile__menu-item">
              <List.Item.Meta
                avatar={<div className="profile__menu-icon">{item.icon}</div>}
                title={
                  <Text className="profile__menu-label">{item.label}</Text>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default Profile;
