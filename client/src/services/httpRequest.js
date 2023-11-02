import axios from "axios";
import { getLocalStorage } from "../utils/LocalStorageFunctions";

const URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  const { token } = getLocalStorage("auth") || "";
  const Authorization = token && `Bearer ${token}`;
  return Authorization;
};

export const postRequest = async (dataSend, endpoint, content) => {
  try {
    const { data } = await axios.post(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": content || "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.data;
      } else {
        throw new Error(error.message);
      }
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const getRequest = async endpoint => {
  try {
    const { data } = await axios.get(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return data;
  } catch (error) {
    console.dir(error);
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
};

export const patchRequest = async (dataSend, endpoint) => {
  try {
    const { data } = await axios.patch(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.data;
      } else {
        throw new Error(error.message);
      }
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const putRequest = async (dataSend, endpoint) => {
  try {
    console.log(getToken());
    const { data } = await axios.put(URL + endpoint, dataSend, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        return error.response.data;
      } else {
        throw new Error(error.message);
      }
    } else {
      return "An unexpected error occurred";
    }
  }
};

export const deleteRequest = async endpoint => {
  try {
    const { data, status } = await axios.delete(URL + endpoint, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: getToken()
      }
    });

    return { data, status };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    } else {
      return "An unexpected error occurred";
    }
  }
};
