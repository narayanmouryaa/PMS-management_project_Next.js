"use client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    error: "",
    status: false,
    postData: "",
    postError: "",
    postStatus: false,
    loading: false,
};

//user Signup function
export const userSignUpThunk = createAsyncThunk(
  "uuserSignUpThunk/post",
  async (data) => {
    try {
      const headers = {
        "Content-Type": "application/json",
      };
      const apiUrl = `https://pmsapi.qrstaff.in/api/user/signup`;
      const api = await axios.post(apiUrl, data, headers);
      console.log(api, "data");
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        throw new Error("Page not found");
      }
      if (error.response.status === 500) {
        throw new Error("Internal Server Error");
      }
    }
  }
);

export const LoginAuthenticationSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    /// Post user data
    builder.addCase(userSignUpThunk.pending, (state, action) => {
      state.postData = [];
      state.postStatus = true;
      state.postStatus = "";
    });
    builder.addCase(userSignUpThunk.fulfilled, (state, action) => {
      state.postData = action.payload;
      state.postStatus = false;
      state.postError = "";
    });
    builder.addCase(userSignUpThunk.rejected, (state, action) => {
      state.postData = [];
      state.postStatus = false;
      state.postError = "";
    });
  },
});

// export const {addUser} = LoginAuthenticationSlice.reducer
export default LoginAuthenticationSlice.reducer;
