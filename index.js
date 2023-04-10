require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");
const db = require("./config/db");

const userRouter = require("./routers/userRouter");
const passwordRoute = require("./routers/passwordRoute");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/user", userRouter);
app.use("/api/password", passwordRoute);

app.use(express.static(path.resolve(__dirname, "client", "dist")));
app.get("*", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "client", "dist", "index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

db(app);
