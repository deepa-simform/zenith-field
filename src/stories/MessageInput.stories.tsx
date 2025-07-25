import type { Meta, StoryObj } from "@storybook/react";
import MessageInput from "../components/MessageInput/MessageInput";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import "../index.css";

const meta: Meta<typeof MessageInput> = {
  title: "Components/MessageInput",
  component: MessageInput,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "600px", padding: "20px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    onSendMessage: {
      action: "messageSent",
      description: "Callback when a message is sent",
    },
    className: {
      control: "text",
      description: "Additional CSS class name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Type a message...",
  },
};

export const WithCustomClass: Story = {
  args: {
    placeholder: "Enter your message",
    className: "custom-message-input",
  },
};
