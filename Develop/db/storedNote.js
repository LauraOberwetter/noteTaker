const util = require('util'); //need this for fs
const fs = require('fs'); //require fs to return promises
const writeFile = util.promisify(fs.writeFile); //write data to a file
const readFile = util.promisify(fs.readFile); //read data from file

class StoredNote {
  read() {
    return readFile("db/db.json", "utf8");
  }

  write(data) {
    return writeFile("db/db.json", JSON.stringify(data));
  }

  //read, parse, and return entered data
  getStoredNote() {
    return this.read().then((data) => {
      let notes;
      try {
        notes = [].concat(JSON.parse(data)); //parse the entered notes, capture within notes variable
      } catch (err) {
        notes = []; // return blank array if there is no parsed note
        console.log("err:" + err);
      }
      return notes; //return parsed notes
    });
  }
  //when saved
  //error here? Cannot destructure property 'title' of 'data' as it is undefined. Isn't data defined here?
  addNote(data) {
    const { title, text } = data;
    console.log(data);

    const savedNote = {title, text};

    return this.getStoredNote()
        .then(() => savedNote)
        .then((savedNote) => this.write(savedNote));

  }
};

module.exports = new StoredNote();
