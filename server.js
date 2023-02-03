require('dotenv').config();
const express = require('express');
const sequelize = require('sequelize');
const app = express();
const port = 3002;
const routes = require('./routes/index');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const path = require('path');


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(port, () => {
    console.log('Listening on localhost 3002')
});