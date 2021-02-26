import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import * as staticTypes from "../../src/Store/staticTypes";

let store: any, next: any, invoke: any;

beforeAll(() => {
  store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  next = jest.fn();
  invoke = (action: any) => thunk(store)(next)(action);
});

afterEach(() => {
  fetchMock.restore();
});

it(`${staticTypes.GET_USERS} Dispatch Test`, async () => {
  invoke((dispatch: any, getState: any) => {
    dispatch(staticTypes.GET_USERS);
    getState();
  });

  expect(store.dispatch).toHaveBeenCalledWith(staticTypes.GET_USERS);
  expect(store.getState).toHaveBeenCalled();
});

it(`${staticTypes.SET_USERS} Dispatch Test`, async () => {
  invoke((dispatch: any, getState: any) => {
    dispatch(staticTypes.SET_USERS);
    getState();
  });

  expect(store.dispatch).toHaveBeenCalledWith(staticTypes.SET_USERS);
  expect(store.getState).toHaveBeenCalled();
});
