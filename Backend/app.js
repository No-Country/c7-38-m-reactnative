const express = require("express");

//Routers
const { trainingRoutes } = require("./routes/training.routes");
const { usersRouter } = require("./routes/user.routes.js");

const app = express();

app.use(express.json());

//define  endpoints
app.use("api/v1/trainings", trainingRoutes);
app.use("api/v1/users", usersRouter);

// catch non-existing endpoints
app.all('*',(req, res) => {
  
    res.status(404).json({
        status:'error',
        message:`${req.method} ${req.url}does not exist in our server`,

    })

})


module.exports = { app };
