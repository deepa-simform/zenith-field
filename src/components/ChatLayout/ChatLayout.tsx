import React, { useState } from "react";
import { Layout } from "antd";
import ChatList from "../ChatList/ChatList";
import Conversation from "../Conversation/Conversation";
import Profile from "../Profile/Profile";
import "./ChatLayout.scss";

const { Sider, Content } = Layout;

export interface ChatLayoutProps {
  className?: string;
}

const ChatLayout: React.FC<ChatLayoutProps> = ({ className }) => {
  const [showProfile, setShowProfile] = useState(true);
  const [showChatList, setShowChatList] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState<number>(1);

  const handleSelectChat = (chatId: number) => {
    setSelectedChatId(chatId);
    setShowChatList(false);
  };

  const handleBack = () => {
    setShowChatList(true);
  };

  const handleToggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  return (
    <div className={`chat-layout ${className || ""}`}>
      <Layout className="chat-layout__container">
        {/* Chat List Sidebar */}
        <Sider
          width={400}
          className={`chat-layout__sidebar chat-layout__sidebar--left ${
            showChatList
              ? "chat-layout__sidebar--visible"
              : "chat-layout__sidebar--hidden"
          }`}
          breakpoint="md"
          collapsedWidth={0}
        >
          <ChatList
            onSelectChat={handleSelectChat}
            selectedChatId={selectedChatId}
          />
        </Sider>

        {/* Main Conversation Area */}
        <Content
          className={`chat-layout__content ${
            showChatList
              ? "chat-layout__content--hidden"
              : "chat-layout__content--visible"
          }`}
        >
          <Conversation
            onBack={handleBack}
            onToggleProfile={handleToggleProfile}
            chatId={selectedChatId}
          />
        </Content>

        {/* Profile Sidebar */}
        <Sider
          width={256}
          className={`chat-layout__sidebar chat-layout__sidebar--right ${
            showProfile
              ? "chat-layout__sidebar--visible"
              : "chat-layout__sidebar--hidden"
          }`}
          breakpoint="lg"
          collapsedWidth={0}
        >
          <Profile onClose={handleCloseProfile} chatId={selectedChatId} />
        </Sider>
      </Layout>
    </div>
  );
};

export default ChatLayout;
