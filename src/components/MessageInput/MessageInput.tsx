import React, { useState } from "react";
import { Input, Button } from "antd";
import {
  AudioOutlined,
  SmileOutlined,
  PictureOutlined,
} from "@ant-design/icons";
import "./MessageInput.scss";

export interface MessageInputProps {
  onSendMessage?: (message: string) => void;
  placeholder?: string;
  className?: string;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  placeholder = "Enter your message",
  className,
}) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage?.(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`message-input ${className || ""}`}>
      <div className="message-input__container">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="message-input__field"
          size="large"
          suffix={
            <div className="message-input__actions">
              <Button
                type="text"
                icon={<AudioOutlined />}
                className="message-input__action-btn"
                size="small"
              />
              <Button
                type="text"
                icon={<SmileOutlined />}
                className="message-input__action-btn"
                size="small"
              />
              <Button
                type="text"
                icon={<PictureOutlined />}
                className="message-input__action-btn"
                size="small"
              />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default MessageInput;
