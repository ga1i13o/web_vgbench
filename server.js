'use strict';

const path = require('path');
const express = require('express');

const port = process.env.PORT || 3001;
const app = express();

app.use(express.json());
app.use(express.static("./client/build"));

app.get('*', (req, res) => {
    res.redirect('index.html');
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`)); 