import React from "react";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";

import LandingPage from "../../../src/Pages/dashboard";
import reduxStore from "../../../src/Store";

configure({ adapter: new Adapter() });

it(`Dispatch Test`, async () => {
  const wrapper: any = shallow(
    <Provider store={reduxStore()}>
      <LandingPage />
    </Provider>
  );

  const mockData = [{ name: "users's name" }];
  toJson(wrapper).props.value.store.dispatch({
    type: "SET_USERS",
    users: mockData,
  });

  const state = toJson(wrapper).props.value.store.getState();
  expect(mockData).toBe(state.app.users);
});
