import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router.js";

const app = express();

const handleHome = (request, response) => response.send('Hello from my ass!');

const handleProfile = (request, response) => response.send("You are on my profile");

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("tiny"));


app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use("/user", userRouter);

export default app; 