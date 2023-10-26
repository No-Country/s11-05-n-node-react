import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpRequest.js";

export const initialTeams = {
  myTeams: []
};

export const teamSlice = createSlice({
  name: "team",
  initialState: initialTeams,

  reducers: {
    setMyTeams: (state, action) => {
      state.myTeams = action.payload;
    },
    setAddTeam: (state, action) => {
      let newTeam = action.payload;
      state.myTeams.push(newTeam);
    }
  }
});

export const { setMyTeams, setAddTeam } = teamSlice.actions;

export default teamSlice.reducer;

export const listMyTeams = () => async dispatch => {
  try {
    const teams = await getRequest("/team/getMyTeams");
    if (teams.message) {
      dispatch(setMyTeams(teams.team.teams));
    }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};

export const createTeam = team => async dispatch => {
  try {
    const newTeam = await postRequest(team, "/team/createTeam");
    if (newTeam.captain) {
      dispatch(setAddTeam(newTeam));
      return { message: "Equipo creado correctamente" };
    }
  } catch (error) {
    return { login: false, msg: error.toString() };
  }
};
