import type { Meta, StoryObj } from "@storybook/react";
import UserTable from "./UserTable";
import { User } from "@/types/User";

const meta: Meta<typeof UserTable> = {
  component: UserTable,
  title: "Organisms/UserTable",
};

export default meta;

type Story = StoryObj<typeof UserTable>;

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    website: "johndoe.com",
    address: {
      street: "123 Main St",
      suite: "Apt 1",
      city: "Anytown",
      zipcode: "12345",
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "janesmith@example.com",
    phone: "987-654-3210",
    website: "janesmith.com",
    address: {
      street: "456 Maple St",
      suite: "Suite 200",
      city: "Somewhere",
      zipcode: "67890",
    },
  },
];

export const Default: Story = {
  args: {
    users: mockUsers,
  },
};
