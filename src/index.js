const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

const port = 3000 || process.env.PORT;
const publicDirPath = path.join(__dirname, '../public');


app.use(express.static(publicDirPath));
app.set('views', path.join(__dirname,'../views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log('App is up and running on port: ', port);
});