// src/services/userService.ts
import { User } from "@/types/User";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get<User[]>(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users");
  }
};
