// __tests__/Artist.test.tsx

import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Artist from "../components/Artist";

// Sample data for testing
const samplePeople = [
  {
    id: 1,
    name: "John Doe",
    known_for_department: "Actor",
    gender: 2,
    profile_path: "/path/to/image.jpg",
  },
  // Add more sample data as needed
];

describe("Artist Component", () => {
  it("renders correctly", () => {
    // Render the component with sample data
    render(<Artist people={samplePeople} />);

    // Assert that the input field is present
    const inputElement = screen.getByPlaceholderText("Search...");
    expect(inputElement).toBeInTheDocument();

    // Assert that the list of people is displayed
    const peopleElements = screen.getAllByTestId("artist-item");
    expect(peopleElements).toHaveLength(samplePeople.length);
  });

  it("searches for people correctly", async () => {
    // Render the component with sample data
    render(<Artist people={samplePeople} />);

    // Mock the fetch function to return sample data
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve({ results: samplePeople }),
    });

    // Get the input field and enter search text
    const inputElement = screen.getByPlaceholderText("Search...");
    fireEvent.change(inputElement, { target: { value: "John" } });

    // Wait for the component to update after the search
    await waitFor(() => {
      // Assert that the search results are displayed
      const peopleElements = screen.getAllByTestId("artist-item");
      expect(peopleElements).toHaveLength(1); // Assuming only one person matches the search query
    });
  });
});
