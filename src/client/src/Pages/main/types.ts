import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

export type EventChangeType = React.ChangeEvent<HTMLInputElement>;

export type IReduxDispatch = ThunkDispatch<
  IStateProps,
  IDispatchProps,
  AnyAction
>;

export interface IProps extends IDispatchProps {
  test?: string;
  name?: string;
  users: IUserObj[];
}

export interface IState {
  name?: string;
  data: string;
}

export interface IDispatchProps {
  getUsers: () => void;
  createUser: (name: string) => void;
}

export interface IStateProps {
  name: string;
  users: IUserObj[];
}

export interface IReduxState {
  app: {
    users: IUserObj[];
    name: string;
  };
}

export interface IUserObj {
  name: string;
}
