const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = 3333;
const path = require('path');
const io = require('socket.io')(server);

const bodyParser = require('body-parser');
const HTMLing = require('htmling');
const cookieParser = require('cookie-parser');
const Connection = require('./utils/connection').Connection;

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
 * General socket connection
 */
// io.on('connection', function(socket){
//     console.log('a user connected', socket);
//     socket.on('disconnect', function(){
//         console.log('user disconnected');
//     });
// });

/**
 * Tasks-Specific connection
 */

const tasksSocket = io.of('/tasks').on('connection', function(socket){
    console.log('connected to tasks')
    socket.on('disconnect', function(){
        console.log('disconnected from tasks');
    });
})

/**
 * First start mongo
 *  $ mongod --config /usr/local/etc/mongod.conf
 */
Connection.connect(() => {
    server.listen(port, () => {
        console.log(`listeneinng on port ${port}!`)
    });
});