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
}

export interface IState {
  username?: string;
  data: string;
}

export interface IDispatchProps {
  setName: (name: string) => any;
}

export interface IStateProps {
  name: string;
}

export interface IReduxState {
  app: {
    name: string;
  };
}
