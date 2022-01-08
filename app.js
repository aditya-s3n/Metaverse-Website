//required modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/***************** Start Page *****************/
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
}); 

app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on heroku server");
});