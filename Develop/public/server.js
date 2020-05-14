var express = require("express");
var path = require("path");
var fs = require("fs");
const data = require("../db/db.json")

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Notes
var notes = [];

fs.appendFile('db.json', notes, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

//Routes to send user to pages 
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/notes", function (req, res) {
    // fs.readFile(data, (err, data) => {
    //     if (err) throw err;
    //     res.json(data);
    // });
    res.json(data);
});

//Post
app.post("/api/notes", function (req, res) {
    // newNote.id = Math.random() * 100;
    var newNote = req.body;
    newNote.routeName = newNote.name;
    notes.push(newNote);
    res.json(newNote);

    fs.appendFile("db.json", JSON.parse(notes), function (err) {
        if (err) throw err;
        console.log('Updated!');
      });

    // var newNote = req.body;

    // newNote.routeName = newNote.name;

    // res.json(newNote);
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