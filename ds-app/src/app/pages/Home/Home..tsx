// src/pages/Home.tsx
import { fetchUsers } from "@/services/userService/userService";
import { User } from "@/types/User";
import React, { useEffect, useState } from "react";
import UserTable from "../../organisms/UserTable/UserTable";

const Home: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <UserTable users={filteredUsers} />
    </div>
  );
};

export default Home;
