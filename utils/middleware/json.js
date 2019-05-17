const json = function(req, res, next) {
    res.json = function(data){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    };
    next();
};

module.exports = json;