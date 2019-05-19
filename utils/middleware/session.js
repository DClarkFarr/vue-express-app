const session = require('express-session');

const data = session({
    secret: 'testSecret1YouWontGuess',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
     },
});

module.exports = function(){
    return data;
}
