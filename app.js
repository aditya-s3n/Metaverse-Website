//required modules
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

/***************** Start Page *****************/
app.get("/", function(req, res) {
    res.render("index");
});

/***************** Main Content Page *****************/
app.get("/main", function(req, res) {
    res.render("main");
});

/***************** Quiz Page *****************/
app.get("/quiz", function(req, res) {
    res.render("quiz");
});

/***************** Port Connection *****************/
app.listen(process.env.PORT || 3000, function() {
    console.log("Server started on heroku server");
});