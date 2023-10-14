import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";
import { postRequest } from "../../services/httpRequest.js";

export const initialAuth = {
  message: "",
  tokenJWT: "",
  userData: {
    _id: "",
    nickName: "",
    email: "",
    myTeams: [],
    emailStatus: "",
    category: [],
    createdAt: "",
    updatedAt: ""
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: getLocalStorage("auth") ? getLocalStorage("auth") : initialAuth,

  reducers: {
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: () => {
      clearLocalStorage("auth");
      return initialAuth;
    },
    setUserAddress: (state, action) => {
      state.user.address = action.payload;
    }
  }
});

export const { setLogin, setPosition, setLogout, setUserAddress } = authSlice.actions;

export default authSlice.reducer;

export const loginUser = dataLogin => async dispatch => {
  try {
    const auth = await postRequest(dataLogin, "/user/auth");
    if (auth.tokenJWT !== "") {
      dispatch(setLogin(auth));
      const authInStorage = { token: auth.tokenJWT, user: auth.userData };
      setLocalStorage("auth", authInStorage);
      return { login: true, msg: auth.message };
    }
    return { login: false };
  } catch (error) {
    const msgError = error;
    return { login: false, msg: msgError.toString() };
  }
};
