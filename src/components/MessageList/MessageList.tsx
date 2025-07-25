import React from "react";
import { Typography } from "antd";
import MessageBubble from "../MessageBubble/MessageBubble";
import "./MessageList.scss";

const { Text } = Typography;

export interface MessageData {
  id: number;
  text: string;
  isOwn: boolean;
  timestamp?: string;
}

export interface MessageListProps {
  chatId?: number;
  className?: string;
}

// Mock messages data - in real app this would come from API/context
const getMessagesForChat = (chatId: number): MessageData[] => {
  return [
    {
      id: 1,
      text: "No honestly I'm thinking of a career pivot",
      isOwn: true,
      timestamp: "",
    },
    {
      id: 2,
      text: "This is the main chat template",
      isOwn: true,
      timestamp: "",
    },
    {
      id: 3,
      text: "Oh?",
      isOwn: false,
      timestamp: "",
    },
    {
      id: 4,
      text: "Cool",
      isOwn: false,
      timestamp: "",
    },
    {
      id: 5,
      text: "How does it work?",
      isOwn: false,
      timestamp: "",
    },
    {
      id: 6,
      text: "Simple",
      isOwn: true,
      timestamp: "",
    },
    {
      id: 7,
      text: "You just edit any text to type in the conversation you want to show, and delete any bubbles you don't want to use",
      isOwn: true,
      timestamp: "",
    },
    {
      id: 8,
      text: "Boom",
      isOwn: true,
      timestamp: "",
    },
    {
      id: 9,
      text: "Hmmm",
      isOwn: false,
      timestamp: "",
    },
    {
      id: 10,
      text: "I think I get it",
      isOwn: false,
      timestamp: "",
    },
    {
      id: 11,
      text: "Will head to the Help Center if I have more questions tho",
      isOwn: false,
      timestamp: "",
    },
  ];
};

const MessageList: React.FC<MessageListProps> = ({ chatId = 1, className }) => {
  const messages = getMessagesForChat(chatId);

  const renderMessageGroup = (
    messages: MessageData[],
    isOwn: boolean,
    key: string,
  ) => (
    <div
      key={key}
      className={`message-list__group ${
        isOwn ? "message-list__group--own" : "message-list__group--other"
      }`}
    >
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          text={message.text}
          isOwn={message.isOwn}
        />
      ))}
    </div>
  );

  return (
    <div className={`message-list ${className || ""}`}>
      <div className="message-list__content">
        {/* First group of messages from user */}
        {renderMessageGroup(messages.slice(0, 2), true, "group-1")}

        {/* Date separator */}
        <div className="message-list__date">
          <Text className="message-list__date-text">Nov 30, 2023, 9:41 AM</Text>
        </div>

        {/* Messages from other person */}
        {renderMessageGroup(messages.slice(2, 5), false, "group-2")}

        {/* Messages from user */}
        {renderMessageGroup(messages.slice(5, 8), true, "group-3")}

        {/* Final messages from other person */}
        {renderMessageGroup(messages.slice(8, 11), false, "group-4")}
      </div>
    </div>
  );
};

export default MessageList;
