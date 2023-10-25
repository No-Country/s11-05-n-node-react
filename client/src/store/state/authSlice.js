import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";
import { patchRequest, postRequest } from "../../services/httpRequest.js";

export const initialAuth = {
  token: "",
  user: {
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
    }
  }
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;

export const loginUser = dataLogin => async dispatch => {
  try {
    const auth = await postRequest(dataLogin, "/user/auth");
    if (auth.tokenJWT !== "") {
      dispatch(setLogin({ token: auth.tokenJWT, user: auth.userData }));
      const authInStorage = { token: auth.tokenJWT, user: auth.userData };
      setLocalStorage("auth", authInStorage);
      return { login: true, msg: auth.message, user: auth.userData };
    }
    return { login: false };
  } catch (error) {
    const msgError = error;
    return { login: false, msg: msgError.toString() };
  }
};

export const uploadPicture = (file, user) => async dispatch => {
  try {
    const formData = new FormData();
    formData.append("avatar", file);

    const res = await postRequest(formData, `/user/upload/${user.user._id}`, "multipart/form-data");
    if (res?.avatar) {
      dispatch(setLogin({ ...user, user: { ...user.user, avatar: res.avatar } }));
      setLocalStorage("auth", { ...user, user: { ...user.user, avatar: res.avatar } });
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateProfile = data => async dispatch => {
  try {
    const preserve = {
      token: JSON.parse(localStorage.auth).token,
      user: {
        ...JSON.parse(localStorage.auth).user,
        ...data
      }
    };

    const res = await patchRequest(data, "/user/editUser");

    if (res.mensaje == "Usuario modificado con éxito") {
      dispatch(setLogin(preserve));
      setLocalStorage("auth", preserve);
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};
