import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authRequest = createAsyncThunk(
  "auth/request",
  async (email, { rejectWithValue }) => {
    try {
      const usersRes = await axios.get("http://localhost:8080/users");
      const user = usersRes.data.find((user) => user.email === email);
      if (user) {
        return user;
      } else {
        return rejectWithValue("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      return rejectWithValue("Sunucuya bağlanırken bir hata oluştu.");
    }
  }
);

