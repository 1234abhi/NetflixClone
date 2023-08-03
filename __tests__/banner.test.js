import React from "react";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Banner from "../components/Banner";

describe("Banner Component", () => {
  const mockMovie = {
    title: "Mock Movie Title",
    backdrop_path: "/mock-backdrop.jpg",
    overview: "Mock movie overview",
  };

  const mockNetflixOriginals = [mockMovie];

  test("renders banner with movie information", () => {
    render(
      <RecoilRoot>
        <Banner netflixOriginals={mockNetflixOriginals} />
      </RecoilRoot>
    );

    // Assert that movie title is displayed
    const titleElement = screen.getByText(mockMovie.title);
    expect(titleElement).toBeInTheDocument();

    // Assert that movie overview is displayed
    const overviewElement = screen.getByText(mockMovie.overview);
    expect(overviewElement).toBeInTheDocument();

    // Assert that "Play" button is displayed
    const playButtonElement = screen.getByText("Play");
    expect(playButtonElement).toBeInTheDocument();

    // Assert that "More Info" button is displayed
    const moreInfoButtonElement = screen.getByText("More Info");
    expect(moreInfoButtonElement).toBeInTheDocument();
  });
});
