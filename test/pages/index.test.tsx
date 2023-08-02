// pages/index.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";

describe("Home Page", () => {
  it("renders the header correctly", () => {
    render(<Home {...dummyProps} />);

    // Assuming you have a logo with the alt text "Netflix"
    const logoElement = screen.getByAltText("Netflix");
  });
});

// Dummy props for testing
const dummyProps = {
  netflixOriginals: [],
  trendingNow: [],
  topRated: [],
  actionMovies: [],
  comedyMovies: [],
  horrorMovies: [],
  romanceMovies: [],
  documentaries: [],
};
