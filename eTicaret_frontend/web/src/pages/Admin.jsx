import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AdminComp from "../components/admin.jsx/AdminComp";

export const Admin = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };


  return (
    <AdminComp/>
   
  );
};
