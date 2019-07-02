
const server = require('./app').server;
let connection;

module.exports = {
    init(){
        return connection = require('socket.io')(server)
    },
    get(){
        if(!connection){
            return this.init();
        }
        return connection;
    }
}