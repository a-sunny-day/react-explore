import bodyParser from "body-parser";
import morgan from "morgan";
import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import api from "../api";
import { initAuth } from "../middleware/auth";
import { handleError } from "../middleware/errors";
import uuid from "uuid";

const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://localhost:3000");

  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  res.setHeader("Access-Control-Allow-Credentials", true);

  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static("public"));

app.use(
  session({
    genid: function(req) {
      return uuid(24);
    },
    name: "securityTodo",
    secret: process.env.random_secret || "randomSecret",
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
      maxAge: 120 * 60 * 10000
    }
  })
);

app.use(initAuth);

app.use("/api", api);
app.use(handleError);

app.use("*", (req, res) => {
  res.sendFile("/public/index.html", { root: process.cwd() });
});

export default app;
