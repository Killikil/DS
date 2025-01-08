import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const WithProp: Story = {
  render: () => <Button label="value" />,
};
