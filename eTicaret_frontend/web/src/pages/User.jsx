import React, { useEffect, useState } from "react";
import UserComp from "../components/User/UserComp";
import axios from "axios";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    console.log(result.data);
  };
  
  return (
    <div>
      <UserComp />
    </div>
  );
};

export default User;
