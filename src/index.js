const path = require('path');
const express = require('express');
const { engine: handlebars } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;

const route = require('./routes/index.js');
const db = require('./config/db');

app.use(express.static(path.join(__dirname, 'public')));

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'))

// app.use(morgan('combined'))

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
