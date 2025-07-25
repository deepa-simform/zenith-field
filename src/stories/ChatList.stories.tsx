import type { Meta, StoryObj } from "@storybook/react";
import ChatList from "../components/ChatList/ChatList";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import "../index.css";

const meta: Meta<typeof ChatList> = {
  title: "Components/ChatList",
  component: ChatList,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "400px", height: "600px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    selectedChatId: {
      control: "number",
      description: "ID of the currently selected chat",
    },
    onSelectChat: {
      action: "chatSelected",
      description: "Callback when a chat is selected",
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
    selectedChatId: 1,
  },
};

export const DifferentSelection: Story = {
  args: {
    selectedChatId: 3,
  },
};

export const WithCustomClass: Story = {
  args: {
    selectedChatId: 1,
    className: "custom-chat-list",
  },
};
