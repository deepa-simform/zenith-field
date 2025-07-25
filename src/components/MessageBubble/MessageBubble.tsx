import React from "react";
import { Typography } from "antd";
import "./MessageBubble.scss";

const { Text } = Typography;

export interface MessageBubbleProps {
  text: string;
  isOwn: boolean;
  timestamp?: string;
  className?: string;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  text,
  isOwn,
  timestamp,
  className,
}) => {
  return (
    <div
      className={`message-bubble ${
        isOwn ? "message-bubble--own" : "message-bubble--other"
      } ${className || ""}`}
    >
      <Text className="message-bubble__text">{text}</Text>
      {timestamp && (
        <Text className="message-bubble__timestamp">{timestamp}</Text>
      )}
    </div>
  );
};

export default MessageBubble;
