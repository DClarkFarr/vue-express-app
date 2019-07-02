const express = require('express');

const app = require('./utils/app').app;
const server = require('./utils/app').server;

const port = 3333;
const path = require('path');

const bodyParser = require('body-parser');
const HTMLing = require('htmling');
const cookieParser = require('cookie-parser');
const Connection = require('./utils/connection').Connection;
const Socket = require('./utils/socket');

app.set('view engine', 'html');
app.set('views', 'views');
app.set('trust proxy', 1) // trust first proxy

app.use(express.static( path.join(__dirname, 'public') ));
app.use('/images', express.static( path.join(__dirname, 'images') ));
app.engine('html', HTMLing.express(__dirname + '/views/', {watch: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

app.use(cookieParser());

const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

app.use('/api', apiRouter);
app.use(webRouter);

/**
 * First start mongo
 *  $ mongod --config /usr/local/etc/mongod.conf
 */
Connection.connect(() => {
    server.listen(port, () => {
        console.log(`listeneinng on port ${port}!`)
    });
});