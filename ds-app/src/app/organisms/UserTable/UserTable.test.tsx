import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserTable from "./UserTable";
import { User } from "@/types/User";

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

describe("UserTable Component", () => {
  test("renders table with data", () => {
    render(<UserTable users={mockUsers} />);

    // Check if table headers are rendered
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();

    // Check if user rows are rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
  });

  test("filters data based on input", () => {
    render(<UserTable users={mockUsers} />);

    const searchInput = screen.getByPlaceholderText("Search...");
    fireEvent.change(searchInput, { target: { value: "Jane" } });

    // Check that only Jane's row is visible
    expect(screen.getByText("Jane Smith")).toBeInTheDocument();
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
  });

  test("handles pagination correctly", () => {
    const paginatedUsers = Array.from({ length: 15 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      username: `user${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone: "123-456-7890",
      website: "example.com",
      address: {
        street: "123 Street",
        suite: "Suite 1",
        city: "City",
        zipcode: "12345",
      },
    }));

    render(<UserTable users={paginatedUsers} />);

    // Initially, only the first 5 users should be visible
    expect(screen.getByText("User 1")).toBeInTheDocument();
    expect(screen.getByText("User 5")).toBeInTheDocument();
    expect(screen.queryByText("User 6")).not.toBeInTheDocument();

    // Click "Next" button to go to the next page
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);

    // Check that the next set of users is visible
    expect(screen.getByText("User 6")).toBeInTheDocument();
    expect(screen.queryByText("User 1")).not.toBeInTheDocument();
  });

  test("handles sorting correctly", () => {
    render(<UserTable users={mockUsers} />);

    // Click on "Name" column header to sort
    const nameHeader = screen.getByText("Name");
    fireEvent.click(nameHeader);

    // Check the sorting order
    const rows = screen.getAllByRole("row");
    expect(rows[1]).toHaveTextContent("Jane Smith");
    expect(rows[2]).toHaveTextContent("John Doe");

    // Click again to reverse the sorting order
    fireEvent.click(nameHeader);
    expect(rows[1]).toHaveTextContent("John Doe");
    expect(rows[2]).toHaveTextContent("Jane Smith");
  });
});
