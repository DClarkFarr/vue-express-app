const express = require('express');
const router = express.Router();
const root = require('../utils/root');

const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });

const viewMiddleware = require(root('utils/middleware/view'));
const sessionMiddleware = require(root('utils/middleware/session'))

router.use(csrfProtection);
router.use(viewMiddleware);
router.use(sessionMiddleware());

// router.use((req, res, next) => {
//     console.log('hit web router: ' + (new Date).toString() );
//     next();
// });

router.use((req, res, next) => {
    req.session.pageViews = (req.session.pageViews + 1) || 1;
    next();
});

router.get('/', function(req, res){
    res.view('main/home', {title: 'Home', pageViews: req.session.pageViews});
});

router.get('/about', function(req, res){
    res.view("main/about", {title: 'About'});
});

router.use((req, res) => {
    res.render('404', {title: '404 - Page Not FOund'});
});


module.exports = router;