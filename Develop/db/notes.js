const util = require("util");
const fs = require("fs");

const readFileAsyn = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Notes {
    constructor() {
        this.idNum = 0;
    }

    readNotes() {
        return readFileAsyn("db/db.json", "utf8");
    }

    writeNotes(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    }

    getNotes() {
        console.log("Getting your notes")
        return this.readNotes().then(notes => {
            console.log(notes)
            let notesArray;
            try {
                notesArray = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesArray = [];
            }
            return notesArray;
        })
    }

    addNotes(note) {
        console.log("add notes");
        const { title, text } = note;
        const newNote = { title, text, id: ++this.idNum }
        return this.getNotes()
            .then(notes => [...notes, newNote])
            .then(updateNotes => this.writeNotes(updateNotes))
            .then(() => newNote)
    }

    deleteNote(id) {
        console.log("Deleting your note");
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(updatedNotes => this.writeNotes(updatedNotes))
    }
}

module.exports = new Notes();