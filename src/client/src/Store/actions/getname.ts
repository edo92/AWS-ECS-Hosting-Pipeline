import { Dispatch } from "redux";
import axios from "axios";

type ActionType = (dispatch: Dispatch) => void;

export const getUsers = (): ActionType => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get("/backend/getusers");

    dispatch({
      type: "SET_USERS",
      users: res.data,
    });
  };
};

export const createUser = (name: string): ActionType => {
  return async (dispatch: Dispatch) => {
    const res = await axios.post("/backend/createuser", {
      userForm: { name },
    });

    dispatch({
      type: "SET_USERS",
      users: res.data,
    });
  };
};
