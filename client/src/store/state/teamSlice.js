import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpRequest.js";

export const initialTeams = {
  myTeams: [],
  loading: false
};

export const teamSlice = createSlice({
  name: "team",
  initialState: initialTeams,

  reducers: {
    setMyTeams: (state, action) => {
      state.myTeams = action.payload;
      state.loading = false
    },
    setAddTeam: (state, action) => {
      let newTeam = action.payload;
      state.myTeams.push(newTeam);
      state.loading = false
    },
    setLoading: (state) => {
      state.loading = true;
    },
  }
});

export const { setMyTeams, setAddTeam, setLoading } = teamSlice.actions;

export default teamSlice.reducer;

export const listMyTeams = () => async dispatch => {
  try {
    dispatch(setLoading())
    const teams = await getRequest("/team/getMyTeams");
    if (teams.message) {
      dispatch(setMyTeams(teams.team.teams));
    }
  } catch (error) {
    dispatch(setLoading())
    return { login: false, msg: error.toString() };
  }
};

export const createTeam = team => async dispatch => {
  try {
    dispatch(setLoading())
    const newTeam = await postRequest(team, "/team/createTeam");
    if (newTeam.captain) {
      dispatch(setAddTeam(newTeam));
      return { message: "Equipo creado correctamente" };
    }
  } catch (error) {
    dispatch(setLoading())
    return { login: false, msg: error.toString() };
  }
};
