const path = require('path');
const PORT = process.env.PORT || 3001;
const  notes  = require('./db/db.json');
const express = require('express');
const fs = require('fs');
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/index.html');
});

app.get('/notes', (req, res) => {
  res.sendFile(__dirname, '/notes.html');
  const createLi = req.body;
  
  console.log(createLi)

  res.json(notes)

});

app.get('/api/notes', (req, res) => {
  res.sendFile(__dirname, '/db/db.json');

  res.json(notes)

});

app.post('/api/notes', (req, res) => {
  const newNote = req.body;
 
  console.log(newNote);
  notes.push(newNote)
      res.send(notes);
      
  });

app.post('/api/notes/:id', (req, res) => {
   
    res.json(notes);
    
});

app.delete('/api/notes/:id', (req, res) => {
  
res.send('delete');
})
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

