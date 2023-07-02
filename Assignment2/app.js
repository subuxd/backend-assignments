const http = require('http');

const express = require('express');

const app = express();

// 2 middleware functions

// app.use((req,res,next) => {
//     console.log("Hey first middleware here!");
//     next();
// });

// app.use((req,res,next) => {
//     console.log("Hey second middleware here!");
//     res.send(`<h1>hey 2nd middleware</h1>`);
// });

//Handling routing requests 

app.use('/users', (req,res,next) => {
    res.send(`<h1>Users Page</h1>`);
});
app.use('/', (req,res,next) => {
    res.send(`<h1>Home Page</h1>`);
});


app.listen(3000);
