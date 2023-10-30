import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import team from "./state/teamSlice";
import members from "./state/membersSlice";

export const store = configureStore({
  reducer: {
    auth,
    team,
    members
  }
});
