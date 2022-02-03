import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";


Enzyme.configure({ adapter: new Adapter() });


describe("When App renders", () => {
    it("displays a heading", () => {
      const app = shallow(<App />);
      const appHeading = app.find("Header").text();
      expect(appHeading).toEqual("<Header />");
    });
  });