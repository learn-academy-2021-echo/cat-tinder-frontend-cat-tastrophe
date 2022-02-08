import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "./CatNew";

Enzyme.configure({ adapter: new Adapter() });

describe("When CatNew renders", () => {
  it("displays a CatNew", () => {
    const catNew = shallow(<CatNew />);
    const catNewHeading = catNew.find("h3").text();
    expect(catNewHeading).toEqual(" Create a new profile ");
  });
});
