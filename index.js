const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user.route");
const task = require("./routes/task.route");
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/to-do-app")
  .then(() => {
    console.log("connet to DB success");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/tasks", task);

app.use("/", user);
app.listen(3000, () => console.log("connect succes on port 3000"));
