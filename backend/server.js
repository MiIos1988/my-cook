const express = require("express");
const app = express();
const port = 5050;




app.listen(port, (err) => {
    err ? console.log("Error on server start")
        : console.log(`Server is running on port ${port}....`)
}
)
