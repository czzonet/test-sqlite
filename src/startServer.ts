import express from "express";
import http from "http";
import { addMiddleware } from "./addMiddleware";
import { addRequest } from "./addRequest";
import { config } from "./config";

export const startServer = async () => {
  const address = "http://" + config.host + ":" + config.port;
  const app = express();
  // add first
  addMiddleware(app);
  addRequest(app);

  const httpServer = http
    .createServer(app)
    .listen(config.port, config.host, () => {
      console.log("Server start at: ", address);
    });

  process.on("SIGINT", () => {
    httpServer.close((err) => {
      if (err) {
        console.log("err", err);
      }
      console.log("Server closed.");
      process.exit();
    });
  });
};
