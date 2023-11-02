import { configureStore } from "@reduxjs/toolkit";
import auth from "./state/authSlice";
import team from "./state/teamSlice";
import members from "./state/membersSlice";
import category from "./state/categorySlice";
import match from "./state/matchSlice";

export const store = configureStore({
  reducer: {
    auth,
    team,
    members,
    category,
    match
  }
});
