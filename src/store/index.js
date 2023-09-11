import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { fetchUsers } from "./thunks/fetchUsers";
import { addUsers } from "./thunks/addUsers";
import { removeUser } from "./thunks/removeUser";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export { fetchUsers, addUsers, removeUser };
