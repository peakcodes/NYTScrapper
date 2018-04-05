var mongoose = require ("mongoose");

// Save a reference to the Schema constructor

var Schema = mongoose.Schema;

// Create new schema with this strucutre

var newNote = new Schema ({
    title: String,
    body: String
});

// Creat model for schema above, use mongoose's method

var Note = mongoose.model("Note", NoteSchema);

// Export module
module.exports = Note;
