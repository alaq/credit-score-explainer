import React from "react";
import enzyme, { shallow } from "enzyme";
import Home, { better } from "./Home";

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

describe("better ", () => {
  it("returns the right percentiles", () => {
    expect(better(801)).toEqual(80);
    expect(better(741)).toEqual(55);
    expect(better(671)).toEqual(34);
    expect(better(581)).toEqual(16);
    expect(better(301)).toEqual(0);
    expect(better(undefined)).toEqual(0);
    expect(better(10000)).toEqual(undefined);
  });
});
