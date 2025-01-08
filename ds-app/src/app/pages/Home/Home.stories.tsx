import type { Meta, StoryObj } from "@storybook/react";
import React, { useEffect, useState } from "react";
import Home from "./Home";
import { User } from "@/types/User";
import UserTable from "../../organisms/UserTable/UserTable";
import ErrorMessage from "@/app/atoms/ErrorMessage/ErrorMessage";

const meta: Meta<typeof Home> = {
  component: Home,
  title: "Pages/Home",
};

export default meta;

type Story = StoryObj<typeof Home>;

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

const MockHome: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate API delay
    setTimeout(() => {
      try {
        setUsers(mockUsers);
        setLoading(false);
      } catch {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    }, 1000); // Simulate 1-second delay
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <ErrorMessage message={error} />;

  return <UserTable users={users} />;
};

export const Default: Story = {
  render: () => <MockHome />,
};

export const Loading: Story = {
  render: () => <div>Loading...</div>,
};

export const Error: Story = {
  render: () => <ErrorMessage message={"Error: Failed to fetch users"} />,
};
