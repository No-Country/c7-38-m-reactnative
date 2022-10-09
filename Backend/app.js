const express = require("express");

//Routers
const { trainingRoutes } = require("./routes/training.routes");
const { usersRouter } = require("./routes/user.routes.js");

const app = express();

app.use(express.json());

//define  endpoints
app.use("api/v1/trainings", trainingRoutes);
app.use("api/v1/users", usersRouter);

module.exports = { app };
