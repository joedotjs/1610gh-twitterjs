const express = require('express');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', { noCache: true })
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

app.use(volleyball);

app.get('/', function (req, res, next) {
    const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', {title: 'Hall of Fame', people: people} );
});

app.listen(3001);