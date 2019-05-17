const view = function(req, res, next){
    var viewArgs = function(){
        return {
            session: req.session,
            loggedIn: req.loggedIn,
            user: req.user,
            viewArgs: viewArgs,
            csrf_token: req.csrfToken(),
        }
    };

    res.view = function(file, args) {
        res.render(file, Object.assign({}, viewArgs(), args || {}) );
    };
    next();
};

module.exports = view;