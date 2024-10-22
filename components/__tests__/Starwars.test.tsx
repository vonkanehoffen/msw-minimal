import React from "react";
import { render, waitFor, screen } from "@testing-library/react-native";
import { server } from "../../mocks/server";
import StarWars from "../Starwars";
import { http, HttpResponse } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("StarWars Component", () => {
  it("renders loading state initially", () => {
    render(<StarWars />);
    expect(screen.getByAccessibilityHint("loading")).toBeTruthy();
  });

  it("renders character name after successful fetch", async () => {
    render(<StarWars />);

    await waitFor(() => {
      expect(
        screen.getByText("Character Name: Luke Skywalker MSW")
      ).toBeTruthy();
    });
  });

  it("renders error message on fetch failure", async () => {
    server.use(
      http.get("/api/people/1/", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    render(<StarWars />);

    await waitFor(() => {
      expect(screen.getByText("Failed to load character")).toBeTruthy();
    });
  });
});
