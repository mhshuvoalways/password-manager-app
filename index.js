require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./config/db");

const userRouter = require("./routers/userRouter");
const passwordRoute = require("./routers/passwordRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use("/password", passwordRoute);

app.get("*", (req, res) => {
  res.send("I am the API of password vault");
});

db(app);
