import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });



describe("When NotFound renders", () => {
  it("Page not found", () => {
    const notfound = shallow(<NotFound />);
    const notfoundHeading = notfound.find("div").text();
    expect(notfoundHeading).toEqual("PAGE NOT FOUND");
  });
});
