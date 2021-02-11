/**
 * @jest-environment jsdom
 */

import React from "react";
import { configure, shallow } from "enzyme";
import { MemoryRouter } from "react-router";
import App from "../src/App";
// import LandingPage from "../src/Pages/main";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("testing", () => {
  test("Testing Paths", () => {
    const component = shallow(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const instance: any = component.instance();

    expect(instance.history.location.pathname).toBe("/");
    instance.history.push("/dashboard");
    expect(instance.history.location.pathname).toBe("/dashboard");
  });
});

// class TestApp {
//   public component;
//   public
//   constructor() {
//     configure({ adapter: new Adapter() });
//   }

//   createComponent() {
//     this.component = shallow(
//       <MemoryRouter initialEntries={["/"]}>
//         <App />
//       </MemoryRouter>
//     );
//   }
// }
