import type { Meta, StoryObj } from "@storybook/react";
import MessageBubble from "../components/MessageBubble/MessageBubble";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import "../index.css";

const meta: Meta<typeof MessageBubble> = {
  title: "Components/MessageBubble",
  component: MessageBubble,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "500px", padding: "20px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Message text content",
    },
    isOwn: {
      control: "boolean",
      description: "Whether the message is from the current user",
    },
    timestamp: {
      control: "text",
      description: "Optional timestamp for the message",
    },
    className: {
      control: "text",
      description: "Additional CSS class name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const OwnMessage: Story = {
  args: {
    text: "This is my message",
    isOwn: true,
  },
};

export const OtherMessage: Story = {
  args: {
    text: "This is a message from someone else",
    isOwn: false,
  },
};

export const LongMessage: Story = {
  args: {
    text: "This is a very long message that should wrap to multiple lines to demonstrate how the message bubble handles longer content. It should maintain proper spacing and readability.",
    isOwn: true,
  },
};

export const WithTimestamp: Story = {
  args: {
    text: "Message with timestamp",
    isOwn: true,
    timestamp: "2:30 PM",
  },
};

export const ShortReply: Story = {
  args: {
    text: "Ok",
    isOwn: false,
  },
};
