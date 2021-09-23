# Practice Expressjs framework

    Run with live server.
    Use Postman to test endpoints

## Basic Server Syntax

```
//import express (NOT 'import from ..' syntax, es5 only)
const express = require('express');

//Initialize express
const app = express();

//Create endpoints/routes handlers
app.get('/', (req, res) => res.send('HELLO WORLD'));

//Listen on port
app.listen(5000);

```
## Express Middleware 

Middleware functions are functions that have access to the request and response object. Express has built in middleware but middleware also comes from 3rd party packages as well as custom middleware.

+ Execute any code
+ Make changes to the request/response object
+ End response cycle
+ Call next middleware in the stack


 