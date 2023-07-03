const express = require('express');

const app = express();

const homeRoute = require('./routes/home');
const userRoute = require('./routes/users');

app.use(express.static('public'));

app.use(homeRoute);
app.use(userRoute);

app.listen(3000);
