const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const  notes  = require('./db/db.json');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get('*', (req, res) => {
  res.sendFile(__dirname, '/index.html');
});


app.get('/notes', (req, res) => {
  res.sendFile(__dirname, '/notes.html');

  res.json(notes)

});

app.get('/api/notes', (req, res) => {
  res.sendFile(__dirname, '/db/db.json');
  const activeNote = req.body;
    console.log(activeNote);
    notes.push(activeNote)
        res.send(notes);

});

app.post('/api/notes', (req, res) => {
    const saveNote = req.body;
   console.log(saveNote)
   notes.push(saveNote)
    res.send(notes);
      
  });

app.post('/api/notes/:id', (req, res) => {
 
    
});

app.delete('/api/notes/:id', (req, res) => {
  
res.send('delete');
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

