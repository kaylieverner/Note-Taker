var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Notes
var notes = []; 

//Routes to send user to pages 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", function (req, res) {
    return res.json("db.json");
});

//Post
app.post("/api/notes", function (req, res) {
    var newNote = req.body;

    newNote.routeName = newNote.name;

    res.json(newNote);
});

//Delete 
app.delete("/api/notes/:id", function (req, res) {
    var chosen = req.params.id; 

    console.log(id); 

    for (var i = 0; i < notes.length; i++) {

    }
});


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});