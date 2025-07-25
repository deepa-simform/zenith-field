import React from "react";
import { Avatar, Typography, Button } from "antd";
import {
  ArrowLeftOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import "./ChatHeader.scss";

const { Text } = Typography;

export interface ChatHeaderProps {
  onBack?: () => void;
  onToggleProfile?: () => void;
  chatId?: number;
  className?: string;
}

// Mock data - in real app this would come from props or context
const getChatData = (chatId: number) => {
  const chatData = {
    1: { name: "Helena Hills", status: "Active 20m ago", avatar: "" },
    2: { name: "Carlo Emilio", status: "Online", avatar: "" },
    3: { name: "Oscar Davis", status: "Last seen 1h ago", avatar: "" },
    // Add more as needed
  };
  return chatData[chatId as keyof typeof chatData] || chatData[1];
};

const ChatHeader: React.FC<ChatHeaderProps> = ({
  onBack,
  onToggleProfile,
  chatId = 1,
  className,
}) => {
  const chatData = getChatData(chatId);

  return (
    <div className={`chat-header ${className || ""}`}>
      <div className="chat-header__left">
        {onBack && (
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            className="chat-header__back-btn"
            onClick={onBack}
          />
        )}
        <a
          href="https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=620&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
          target="_blank"
          rel="noopener noreferrer"
          className="chat-header__avatar-link"
        >
          <Avatar
            size={48}
            src={chatData.avatar}
            className="chat-header__avatar"
          />
        </a>
        <div className="chat-header__info">
          <Text className="chat-header__name" strong>
            {chatData.name}
          </Text>
          <Text className="chat-header__status">{chatData.status}</Text>
        </div>
      </div>

      <div className="chat-header__actions">
        <Button
          type="text"
          icon={<PhoneOutlined />}
          className="chat-header__action-btn"
          size="large"
        />
        <Button
          type="text"
          icon={<VideoCameraOutlined />}
          className="chat-header__action-btn"
          size="large"
        />
        {onToggleProfile && (
          <Button
            type="text"
            icon={<MoreOutlined />}
            className="chat-header__action-btn chat-header__profile-btn"
            onClick={onToggleProfile}
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
