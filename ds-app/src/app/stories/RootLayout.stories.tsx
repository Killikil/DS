import type { Meta, StoryObj } from "@storybook/react";
import RootLayout from "../layout";
import "./../globals.css";

const meta: Meta<typeof RootLayout> = {
  component: RootLayout,
  title: "Layouts/RootLayout",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof RootLayout>;

export const Default: Story = {
  render: () => (
    <RootLayout>
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome to the App</h1>
        <p className="mt-2">This is the main content area.</p>
      </div>
    </RootLayout>
  ),
};
