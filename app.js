const express = require('express');

const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');
const app = express();

app.engine('handlebars', expressHbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('main', {layout : false});
});


const counterRoutes = require('./routes/counter');
const timerRoutes = require('./routes/timer');
const mainRoutes = require('./routes/main');

app.use(bodyParser.urlencoded({extended: false}));

app.use(counterRoutes);

app.use(timerRoutes);

app.use(mainRoutes);

app.listen(1000);