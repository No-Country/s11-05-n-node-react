import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../services/httpRequest.js";

export const initialTeams = {
  myTeams: [],
  listTeams: [],
  listTeamsSelected: [],
  teamSelected: [],
  loading: false
};

export const teamSlice = createSlice({
  name: "team",
  initialState: initialTeams,

  reducers: {
    setMyTeams: (state, action) => {
      state.myTeams = action.payload;
      state.loading = false;
    },
    setListTeams: (state, action) => {
      state.listTeams = action.payload;
      state.loading = false;
    },
    setTeamSelected: (state, action) => {
      state.teamSelected = action.payload;
    },
    setAddTeam: (state, action) => {
      let newTeam = action.payload;
      state.myTeams.push(newTeam);
      state.loading = false;
    },
    setLoading: state => {
      state.loading = true;
    },
    addTeamToSelect: (state, action) => {
      let team = action.payload;
      if (team) {
        state.listTeamsSelected = [...state.listTeamsSelected, team];
      }
    },
    removeTeamFromSelect: (state, action) => {
      let id = action.payload;
      state.listTeamsSelected = state.listTeamsSelected.filter(item => item._id !== id);
    },
    clearAllTeams: state => {
      state.listTeamsSelected = [];
    }
  }
});

export const {
  setMyTeams,
  setAddTeam,
  setLoading,
  setListTeams,
  addTeamToSelect,
  removeTeamFromSelect,
  clearAllTeams,
  setTeamSelected
} = teamSlice.actions;

export default teamSlice.reducer;

export const listMyTeams = () => async dispatch => {
  try {
    dispatch(setLoading());
    const teams = await getRequest("/team/getMyTeams");
    if (teams.message) {
      dispatch(setMyTeams(teams.team.teams));
    }
  } catch (error) {
    dispatch(setLoading());
    return { login: false, msg: error.toString() };
  }
};

export const listTeams = () => async dispatch => {
  try {
    dispatch(setLoading());
    const teams = await getRequest("/team");
    if (teams.message) {
      dispatch(setListTeams(teams.allTeams));
    }
  } catch (error) {
    dispatch(setLoading());
    return { login: false, msg: error.toString() };
  }
};

export const createTeam = team => async dispatch => {
  try {
    dispatch(setLoading());
    const newTeam = await postRequest(team, "/team/createTeam");
    if (newTeam.captain) {
      dispatch(setAddTeam(newTeam));
      return { message: "Equipo creado correctamente" };
    }
  } catch (error) {
    dispatch(setLoading());
    return { login: false, msg: error.toString() };
  }
};
