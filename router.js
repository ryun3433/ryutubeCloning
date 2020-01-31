import express, { response } from "express";

export const userRouter = express.Router();

userRouter.get("/", (request, response) => response.send("user index"));
userRouter.get("/edit", (request, response) => response.send("user edit"));
userRouter.get("/password", (request, response) => response.send("user password"));