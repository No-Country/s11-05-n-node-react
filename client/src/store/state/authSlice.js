import { createSlice } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  clearLocalStorage,
  setLocalStorage
} from "../../utils/LocalStorageFunctions.js";
import { deleteRequest, patchRequest, postRequest } from "../../services/httpRequest.js";

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
    },
    setUpdateUser: (state, action) => {
      state.user = action.payload.user;
    },
    setAddFriends: (state, action) => {
      state.user = {
        ...state.user,
        friends: action.payload
      };
    },
    setUpdateAvatar: (state, action) => {
      state.user = {
        ...state.user,
        avatar: action.payload.user.avatar
      };
    }
  }
});

export const { setLogin, setLogout, setUpdateUser, setUpdateAvatar, setAddFriends } =
  authSlice.actions;

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

export const uploadPicture = (file, id) => async dispatch => {
  try {
    const formData = new FormData();
    formData.append("avatar", file);

    const res = await postRequest(formData, `/user/upload/${id}`, "multipart/form-data");
    if (res?.avatar) {
      dispatch(setUpdateAvatar({ user: { avatar: res.avatar } }));
      setLocalStorage("auth", {
        token: JSON.parse(localStorage.auth).token,
        user: { ...JSON.parse(localStorage.auth).user, avatar: res.avatar }
      });
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
    const res = await patchRequest(data, "/user/editUser");
    if (res?.userPatch) {
      dispatch(setUpdateUser({ user: res.userPatch }));
      setLocalStorage("auth", {
        token: JSON.parse(localStorage.auth).token,
        user: res.userPatch
      });
      return { ok: true };
    }
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteProfile = id => async dispatch => {
  try {
    const res = await deleteRequest("/user/delete/" + id);

    if (res?.status === 200) {
      dispatch(setLogout());
      dispatch(setLogin({}));
    }
    return res?.status;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addFriend = idFriend => async dispatch => {
  try {
    const res = await patchRequest({ idFriend }, `/user/friend/${idFriend}`);
    if (res?.friends) {
      dispatch(setAddFriends(res.friends));
      const auth = getLocalStorage("auth");
      auth.user.friends = res.friends;
      setLocalStorage("auth", auth);
      return { ok: true };
    }
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const deleteFriend = idFriend => async dispatch => {
  try {
    const res = await deleteRequest(`/user/friend/${idFriend}`);
    if (res?.data.friends) {
      dispatch(setAddFriends(res.data.friends));
      const auth = getLocalStorage("auth");
      auth.user.friends = res.data.friends;
      setLocalStorage("auth", auth);
      return { ok: true };
    }
    return res;
  } catch (error) {
    console.log(error);
    return false;
  }
};
