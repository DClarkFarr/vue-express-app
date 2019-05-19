const MongoClient = require('mongodb').MongoClient;
const Server = require('mongodb').Server;

var _db, _client;

function getDb(){
    return _db;
}
function getClient(){
    return _client;
}
class Connection {

    static connect(resolve){
        _client = new MongoClient(new Server('localhost', 27017));
        _client.connect().then(con => {
            _db = con.db("local");

            resolve();
        })

    }
}


exports.Connection = Connection;
exports.getDb = getDb;
exports.getClient = getClient;


