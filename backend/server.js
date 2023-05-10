const express = require("express");
const app = express();
const port = 5050;
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vojvoda1988:vojvoda1988@cluster0.jit59eb.mongodb.net/")
    .then(console.log("MongoDB is connecting..."))
    .catch(err => console.log("Error in MongoDB", err))



app.listen(port, (err) => {
    err ? console.log("Error on server start")

        : console.log(`Server is running on port ${port}..`)

}
)
