const express = require("express");
const path = require("path");
const moment = require("moment");
const logger = require('.middleware/logger');
const members = require("./Members");
const app = express();

// // manually set every route (not ideal)
// app.get('/', (req, res) => {
//     // res.send('Hello wORld'); //sends string, file, json etc
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })



// init middleware
app.use(logger);

//get all members in Members.js
app.get("/api/members", (req, res) => res.json(members));

// Set static folder (best way)
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORTEXERCISE || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
