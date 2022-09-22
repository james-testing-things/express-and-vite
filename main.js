import express from "express";

export const app = express();

export const start = () => {
  app.listen(3000, () => {
    console.log("server is on 3000");
  });
};

start()
 