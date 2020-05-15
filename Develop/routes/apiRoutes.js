var router = require("express").Router();
var notes = require("../db/notes.js");

router.get("/notes", function(req, res){
  notes.getNotes()
  .then(notes => res.json(notes))
  .catch(err => res.status(500).json(err));
})
router.post("/notes", function(req, res){
  notes.addNotes(req.body)
  .then(notes => res.json(notes))
  .catch(err => res.status(500).json(err));
})
router.delete("/notes/:id", function(req, res){
  notes.removeNote(req.params.id)
  .then(() => res.json({ok: true}))
  .catch(err => res.status(500).json(err));
})

//Get
// router.get('/api/notes', function (req, res) {
//     fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', function (
//       error,
//       data
//     ) {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data);
//       return res.json(JSON.parse(data));
//     });
//   });

// //Post
// router.post("/api/notes", function (req, res) {
//     // newNote.id = Math.random() * 100;
//     var newNote = req.body;
//     newNote.routeName = newNote.name;
    
//     notes.push(newNote);
//     res.json(newNote);

//     fs.appendFile("../db/db.json", JSON.stringify(notes), function (err) {
//         if (err) throw err;
//         console.log('Updated!');
//       });
// });

// //Delete NEEDS TO BE UPDATED
// router.delete("/api/notes/:id", function (req, res) {
//     notes.removeNote(req.params.id).then(() => res.json({ok: true})).catch(err => res.status(500).json(err)); 
// });

module.exports = router; 