const path = require('path');
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db.json');
const express = require('express');
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

app.post('/api/notes', (req, res) => {
    res.json(notes);
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

