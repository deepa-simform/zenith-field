import React from "react";
import { Input, List, Avatar, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./ChatList.scss";

const { Title, Text } = Typography;

export interface ChatData {
  id: number;
  name: string;
  message: string;
  avatar?: string;
  timestamp?: string;
  unreadCount?: number;
}

export interface ChatListProps {
  onSelectChat?: (chatId: number) => void;
  selectedChatId?: number;
  className?: string;
}

const conversations: ChatData[] = [
  {
    id: 1,
    name: "Helena Hills",
    message: "Will head to the Help Center...",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2F7953c2282f53412aadd862bf64386aa5%2F19af3c6c73a84b2dbf6938c478f991c5",
  },
  {
    id: 2,
    name: "Carlo Emilio",
    message: "Let's go",
    avatar:
      "https://cdn.builder.io/api/v1/image/assets%2F7953c2282f53412aadd862bf64386aa5%2F9d9854f513174d8895f9b0dff79bddc3",
  },
  {
    id: 3,
    name: "Oscar Davis",
    message: "Trueeeeee",
  },
  {
    id: 4,
    name: "Daniel Jay Park",
    message: "lol yeah, are you coming to the lunch on the 13th?",
  },
  {
    id: 5,
    name: "Mark Rojas",
    message: "great catching up over dinner!!",
  },
  {
    id: 6,
    name: "Giannis Constantinou",
    message: "yep 🫡🫡",
  },
  {
    id: 7,
    name: "Briana Lewis",
    message: "When are you coming back to town? Would love to catch up.",
  },
  {
    id: 8,
    name: "Mom",
    message: "Thanks!",
  },
  {
    id: 9,
    name: "Sherry Roy",
    message:
      "Jack needs to find a sitter for the dog and I don't know who's good",
  },
  {
    id: 10,
    name: "John Smith",
    message: "sg!",
  },
];

const ChatList: React.FC<ChatListProps> = ({
  onSelectChat,
  selectedChatId = 1,
  className,
}) => {
  const handleChatClick = (chatId: number) => {
    onSelectChat?.(chatId);
  };

  return (
    <div className={`chat-list ${className || ""}`}>
      {/* Header */}
      <div className="chat-list__header">
        <Title level={3} className="chat-list__title">
          App
        </Title>

        {/* Search */}
        <Input
          placeholder="Search chats"
          prefix={<SearchOutlined className="chat-list__search-icon" />}
          className="chat-list__search"
          size="large"
        />
      </div>

      {/* Chat List */}
      <div className="chat-list__content">
        <List
          className="chat-list__list"
          itemLayout="horizontal"
          dataSource={conversations}
          renderItem={(item) => (
            <List.Item
              className={`chat-list__item ${
                selectedChatId === item.id ? "chat-list__item--active" : ""
              }`}
              onClick={() => handleChatClick(item.id)}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    size={64}
                    src={item.avatar}
                    className="chat-list__avatar"
                  />
                }
                title={
                  item.name === "Carlo Emilio" ? (
                    <h3 className="chat-list__name">{item.name}</h3>
                  ) : (
                    <Text className="chat-list__name" strong>
                      {item.name}
                    </Text>
                  )
                }
                description={
                  <Text className="chat-list__message" ellipsis>
                    {item.message}
                  </Text>
                }
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default ChatList;
