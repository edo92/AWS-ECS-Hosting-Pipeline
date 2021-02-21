/**
 * @jest-environment jsdom
 */

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import LandingPage from "../../../src/Pages/main";

configure({ adapter: new Adapter() });
let mock = new MockAdapter(axios);

let spyReq: any, app: any;

beforeAll(() => {
  mock.onGet("/backend/getusers").reply(200, []);
  spyReq = jest.spyOn(axios, "get");
  app = shallow(<LandingPage />);
});

describe("Initial", () => {
  it("fetch getdata", (done) => {
    app
      .instance()
      .componentDidMount()
      .then(() => {
        expect(spyReq).toHaveBeenCalled();
        expect(spyReq).toHaveBeenCalledWith("/backend/getusers");
        expect(app.state()).toHaveProperty("data", []);
        done();
      })
      .catch((err: object) => {
        throw err;
      });
  });
});
