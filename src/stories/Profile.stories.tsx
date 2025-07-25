import type { Meta, StoryObj } from "@storybook/react";
import Profile from "../components/Profile/Profile";
import { ThemeProvider } from "../components/ThemeProvider/ThemeProvider";
import "../index.css";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ width: "256px", height: "600px" }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    chatId: {
      control: "number",
      description: "ID of the chat/user to display profile for",
    },
    onClose: {
      action: "profileClosed",
      description: "Callback when profile is closed",
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
    chatId: 1,
  },
};

export const DifferentUser: Story = {
  args: {
    chatId: 2,
  },
};

export const WithCloseButton: Story = {
  args: {
    chatId: 1,
    onClose: () => console.log("Profile closed"),
  },
};

export const WithCustomClass: Story = {
  args: {
    chatId: 1,
    className: "custom-profile",
  },
};
