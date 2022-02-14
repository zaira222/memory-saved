const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

