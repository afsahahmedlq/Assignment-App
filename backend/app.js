const express = require ("express");
// const connectDB= require("../config/database");
const app= express();

app.use(express.json());
// connectDB();

const user= require("./routes/userRoute");
app.use("/api/v1", user);


module.exports= app;
