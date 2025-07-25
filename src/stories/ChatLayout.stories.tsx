import type { Meta, StoryObj } from "@storybook/react";
import ChatLayout from "../components/ChatLayout/ChatLayout";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import "../index.css";

const meta: Meta<typeof ChatLayout> = {
  title: "Components/ChatLayout",
  component: ChatLayout,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS class name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: "custom-chat-layout",
  },
};
