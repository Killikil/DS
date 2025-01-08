import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchUsers } from "./userService";
import { User } from "@/types/User";

describe("fetchUsers", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it("should fetch users successfully", async () => {
    const mockData: User[] = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        phone: "123-456-7890",
        website: "johndoe.com",
        address: {
          street: "123 Main St",
          suite: "Apt 1",
          city: "Somewhere",
          zipcode: "12345",
        },
      },
    ];

    mock
      .onGet("https://jsonplaceholder.typicode.com/users")
      .reply(200, mockData);

    const users = await fetchUsers();
    expect(users).toEqual(mockData);
  });

  it("should throw an error if fetching users fails", async () => {
    mock.onGet("https://jsonplaceholder.typicode.com/users").reply(500);

    await expect(fetchUsers()).rejects.toThrow("Failed to fetch users");
  });
});
