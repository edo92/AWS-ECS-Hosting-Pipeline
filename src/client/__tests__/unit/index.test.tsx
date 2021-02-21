/**
 * @jest-environment jsdom
 */

import React from "react";
import { configure, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../../src/App";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Testing Routes", () => {
  let instance: any;
  let component: any;

  beforeAll(() => {
    component = shallow(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
    instance = component.instance();
  });

  test("landing path", () => {
    expect(instance.history.location.pathname).toBe("/");
  });

  test("dashboard path", () => {
    instance.history.push("/dashboard");
    expect(instance.history.location.pathname).toBe("/dashboard");
  });
});
