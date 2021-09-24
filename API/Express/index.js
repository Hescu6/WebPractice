const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const logger = require("./middleware/logger");
const members = require('./Members');
const app = express();

// // manually set every route (not ideal)
// app.get('/', (req, res) => {
//     // res.send('Hello wORld'); //sends string, file, json etc
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

// init logger middleware
app.use(logger);

//handlebars middleware to render templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Member App",
    members: members
  })
);

// Set static folder (best way)
app.use(express.static(path.join(__dirname, "public")));

//members API route
app.use("/api/members", require("./routes/api/members"));

const PORT = process.env.PORTEXERCISE || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
