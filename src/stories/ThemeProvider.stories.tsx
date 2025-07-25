import type { Meta, StoryObj } from "@storybook/react";
import {
  ThemeProvider,
  useTheme,
} from "../components/ThemeProvider/ThemeProvider";
import { Button } from "antd";
import "../index.css";

// Demo component to show theme switching
const ThemeDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Theme Provider Demo</h2>
      <p>
        Current theme: <strong>{theme}</strong>
      </p>
      <Button onClick={toggleTheme} type="primary">
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </Button>
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid var(--chat-gray-200)",
          borderRadius: "8px",
        }}
      >
        <p>This content adapts to the current theme.</p>
        <p style={{ color: "var(--chat-gray-400)" }}>Secondary text color</p>
      </div>
    </div>
  );
};

const meta: Meta<typeof ThemeProvider> = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultTheme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Default theme to use",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LightTheme: Story = {
  args: {
    defaultTheme: "light",
    children: <ThemeDemo />,
  },
};

export const DarkTheme: Story = {
  args: {
    defaultTheme: "dark",
    children: <ThemeDemo />,
  },
};
