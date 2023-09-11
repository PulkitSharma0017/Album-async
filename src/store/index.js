import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUsers } from "./thunks/addUsers";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { fetchUsers, addUsers };
