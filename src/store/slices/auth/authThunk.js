import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../configs/axiosInstance";

const SignUp = createAsyncThunk(
  "auth/signUp",
  async ({ values }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/api/auth/signup", values);

      return data;
    } catch (error) {
      return rejectWithValue({ message: error.response.data.message });
    }
  }
);

export const AUTH_THUNK = { SignUp };