import { rest } from "msw";
import data from "../../data.json";

export const handlers = [
  rest.get("https://api.nasa.gov/planetary/apod", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data[0]));
  }),
];
