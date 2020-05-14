var express = require("express");
var path = require("path");
var fs = require("fs");

let rawdata = fs.readFileSync("../db/db.json"); 
let notesFile = JSON.parse(rawdata); 

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

//NEEDS TO BE UPDATED
app.get("/api/notes", function (req, res) {
    return res.json(notesFile);

    // return res.json("../db/db.json");
    // fs.readFile(JSON.parse("../db/db.json"), (err, data) => {
    //     if (err) throw err; 
    // res.sendFile(__dirname, JSON.parse("../db/db.json"));
    // })
    // // res.sendFile(path.join(_dirname, "../db/db.json"));
    // JSON.parse(fs.readFile("../db/db.json", (err, data) => {
    //     if (err) throw err;
    //     res.json(notes);
    // }));
});

//Post
app.post("/api/notes", function (req, res) {
    // newNote.id = Math.random() * 100;
    var newNote = req.body;
    newNote.routeName = newNote.name;
    notes.push(newNote);
    res.json(newNote);

    fs.appendFile("../db/db.json", JSON.stringify(notes), function (err) {
        if (err) throw err;
        console.log('Updated!');
      });
});

//Delete NEEDS TO BE UPDATED
app.delete("/api/notes/:id", function (req, res) {
    var chosen = req.params.id;

    console.log(id);

    for (var i = 0; i < notes.length; i++) {

    }
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});