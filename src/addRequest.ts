import { Express } from "express";

export const addRequest = (app: Express) => {
  app.get("/hello", (req, res) => res.json({ name: "foo" }));
};
