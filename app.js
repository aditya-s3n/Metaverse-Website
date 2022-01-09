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

app.post("/", function(req, res) {
    let value = req.body.sumbitButton;

    if (value === "quiz") {
        res.redirect("/quiz");
    }
    else {
        res.redirect("/main");
    }
    
});

/***************** Main Content Page *****************/
app.get("/main", function(req, res) {
    res.render("main");
});


app.post("/main", function(req, res) {
    res.redirect("/quiz");
});

/***************** Quiz Page *****************/
app.get("/quiz", function(req, res) {
    res.render("quiz");
});

app.post("/quiz", function(req, res) {
    let button = req.body.button;
    
    if (button === "homepage") {
        res.redirect("/");
    }
    else {
        res.ma
    }
});

/***************** Port Connection *****************/
app.listen(process.env.PORT || 3000, function() {
    console.log("Server Started, PORT: 3000");
});