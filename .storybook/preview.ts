import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#F5F5F5",
        },
        {
          name: "dark",
          value: "#1a1a1a",
        },
        {
          name: "white",
          value: "#FFFFFF",
        },
      ],
    },
  },
};

export default preview;
