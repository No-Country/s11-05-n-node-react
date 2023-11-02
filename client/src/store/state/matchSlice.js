import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpRequest.js";

export const initialMatch = {
  listMatches: [],
  loading: false
};

export const matchSlice = createSlice({
  name: "match",
  initialState: initialMatch,

  reducers: {
    setListMatches: (state, action) => {
      state.listMatches = action.payload;
      state.loading = false;
    }
  }
});

export const { setListMatches } = matchSlice.actions;

export default matchSlice.reducer;

export const listMatch = () => async dispatch => {
  try {
    const teams = await getRequest("/team");
    console.log(teams);
    // if (teams.message) {
    //   dispatch(setListTeams(teams.allTeams));
    // }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};

export const createMatch = match => async dispatch => {
  try {
    const newMatch = await postRequest(match, "/match/createMatch");
    if (newMatch) {
      dispatch(setListMatches(newMatch));
      return { newMatch, message: "Match creado correctamente" };
    }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};
