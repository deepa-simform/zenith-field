import React from "react";
import { Layout } from "antd";
import ChatHeader from "../ChatHeader/ChatHeader";
import MessageList from "../MessageList/MessageList";
import MessageInput from "../MessageInput/MessageInput";
import "./Conversation.scss";

const { Header, Content, Footer } = Layout;

export interface ConversationProps {
  onBack?: () => void;
  onToggleProfile?: () => void;
  chatId?: number;
  className?: string;
}

const Conversation: React.FC<ConversationProps> = ({
  onBack,
  onToggleProfile,
  chatId = 1,
  className,
}) => {
  return (
    <div className={`conversation ${className || ""}`}>
      <Layout className="conversation__layout">
        {/* Chat Header */}
        <Header className="conversation__header">
          <ChatHeader
            onBack={onBack}
            onToggleProfile={onToggleProfile}
            chatId={chatId}
          />
        </Header>

        {/* Messages Area */}
        <Content className="conversation__content">
          <MessageList chatId={chatId} />
        </Content>

        {/* Message Input */}
        <Footer className="conversation__footer">
          <MessageInput onSendMessage={(message) => console.log(message)} />
        </Footer>
      </Layout>
    </div>
  );
};

export default Conversation;
