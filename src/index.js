const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;  

//
app.use(express.static(path.join(__dirname, 'public'))); 
//body-parser: middleware doc du lieu tu form data hay query parameter chuyen thanh kieu obj
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//template engine. Rendering engine setup
app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes initial
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
