const util = require('util');
const fs = require('fs'); //require fs to return promises
const writeFile = util.promisify(fs.writeFile); //write data to a file
const readFile = util.promisify(fs.readFile); //read data from file

class StoredNote {
    read () {
        return readFile('db/db.json', 'utf8');
    }

    write (data) {
        return writeFile('db/db.json', JSON.stringify(data));
    }

    //read, parse, and return entered data 
    getStoredNote () {
        return this.read().then((data) => {
            let notes;
            try {
                notes = [].concat(JSON.parse(data)); //parse the entered notes, capture within notes variable
              } catch (err) {
                notes = []; // return blank array if there is no parsed note
              }
              return notes; //return parsed notes
            });
        }
    //when saved
    //error here? Cannot destructure property 'title' of 'data' as it is undefined. Isn't data defined here?
        addNote(data) {
        const { title, text } = data;
    
        if (!title || !text) {
            throw new Error("Please enter a note");
        }

    }

};

module.exports = new StoredNote();
