import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  component: ErrorMessage,
  title: "Atoms/ErrorMessage",
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: "An unexpected error occurred. Please try again.",
  },
};

export const CustomMessage: Story = {
  args: {
    message: "This is a custom error message.",
  },
};
