const express = require('express');
const router = express.Router();
const root = require('../utils/root');

const session = require('express-session');
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });

const viewMiddleware = require(root('utils/middleware/view'));

//router.set('trust proxy', 1) // trust first proxy
router.use(session({
  secret: 'cool test',
  resave: false,
  saveUninitialized: true,
  cookie: { }
}));

router.use(csrfProtection);
router.use(viewMiddleware);

router.use((req, res, next) => {
    console.log('hit web router: ' + (new Date).toString() );
    next();
});

router.use((req, res, next) => {
    //didn't hit a page
    req.session.pageViews--;
    next();
});

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