const router = require('express').Router();

const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
router.get('/', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      res.json(JSON.parse(data));
    });
  });
  
  router.post('/', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    
    fs.readFile('db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      const notes = JSON.parse(data);
      notes.push(newNote);
  
      fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.json(newNote);
      });
    });
  });
  
  router.delete('/:id', (req, res) => {
    fs.readFile('db/db.json', 'utf8', (err, data) => {
      if (err) throw err;
      let notes = JSON.parse(data);
      notes = notes.filter(note => note.id !== req.params.id);
      
      fs.writeFile('db/db.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        res.sendStatus(204);
      });
    });
  });

  module.exports = router