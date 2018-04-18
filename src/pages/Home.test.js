import React from "react";
import enzyme, { shallow } from "enzyme";
import Home from "./Home";

describe("Home", () => {
  let Maison;

  beforeEach(() => {
    Maison = shallow(<Home />);
  });

  it("renders two headers", () => {
    expect(Maison.find("h1").length).toEqual(2);
  });

  it("renders the correct content", () => {
    expect(
      Maison.find("div").contains(
        <h1 className="page-title">
          Your FICO score is <strong>725</strong>.
        </h1>
      )
    ).toEqual(true);
  });
});
