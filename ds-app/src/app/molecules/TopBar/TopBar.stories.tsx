import type { Meta, StoryObj } from "@storybook/react";

import TopBar from "./TopBar";

const meta: Meta<typeof TopBar> = {
  component: TopBar,
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {};

export const WithLinks: Story = {
  render: () => <TopBar />,
};