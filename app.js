const express = require('express');

const bodyParser = require('body-parser');

// const expressHbs = require('express-handlebars');

// app.engine('hbs', expressHbs());

// app.set('view engine','hbs');

const app = express();

const counterRoutes = require('./routes/counter');
const timerRoutes = require('./routes/timer');
const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));

app.use(counterRoutes);

app.use(timerRoutes);

app.use(mainRoutes);

app.listen(1000);