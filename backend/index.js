const express = require("express");  
const cors= require('cors');
const mainRouter= require("./routes/index");


app.use(cors());
app.use(express.json());
app.use("/api/v1", mainRouter);

const app= express();


app.listen(3000);
