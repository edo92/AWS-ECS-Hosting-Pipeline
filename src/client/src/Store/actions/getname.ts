// import { Dispatch } from "redux";

export const setname = (name: string) => {
  return (dispatch: any) => {
    dispatch({
      type: "SET_NAME",
      name: name,
    });
  };
};
