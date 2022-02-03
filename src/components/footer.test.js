import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Footer from "./Footer";
Enzyme.configure({ adapter: new Adapter() });

describe("When Footer renders", () => {
  it("displays a footer", () => {
    const footer = shallow(<Footer />);
    const footerHeading = footer.find("footer").text();
    expect(footerHeading).toEqual("Created by Cat-tastrophe  ");
  });
});
