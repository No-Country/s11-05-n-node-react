import { createSlice } from "@reduxjs/toolkit";
import { getRequest } from "../../services/httpRequest.js";

export const initialMembers = {
  listMembers: [],
  listMembersSelected: []
};

export const membersSlice = createSlice({
  name: "members",
  initialState: initialMembers,

  reducers: {
    setListMembers: (state, action) => {
      state.listMembers = action.payload;
    },
    addMemberToSelect: (state, action) => {
      let member = action.payload;
      if (member) {
        state.listMembersSelected = [...state.listMembersSelected, member];
      }
    },
    removeMemberFromSelect: (state, action) => {
      let id = action.payload;
      state.listMembersSelected = state.listMembersSelected.filter(item => item._id !== id);
    },
    clearAllMembers: state => {
      state.listMembersSelected = [];
    }
  }
});

export const { setListMembers, addMemberToSelect, removeMemberFromSelect, clearAllMembers } =
  membersSlice.actions;

export default membersSlice.reducer;

export const listMembers = () => async dispatch => {
  try {
    const members = await getRequest("/user");
    if (members.length > 0) {
      dispatch(setListMembers(members));
    }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};
