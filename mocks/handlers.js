import { http, HttpResponse, passthrough } from "msw";

export const handlers = [
  http.get("/api/people/1/", () => {
    console.log("MSW people mock");
    return HttpResponse.json({
      birth_year: "19BBY",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: "https://swapi.dev/api/planets/1/",
      mass: "77",
      name: "Luke Skywalker MSW",
      skin_color: "fair",
      species: [],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      url: "https://swapi.dev/api/people/1/",
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
    });
  }),
  http.all("*", async ({ request }) => {
    return passthrough();
  }),
];
