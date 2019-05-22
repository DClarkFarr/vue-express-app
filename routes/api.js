const express = require('express');
const router = express.Router();

const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true, ignoreMethods: ['HEAD', 'OPTIONS'] })

const cors = require('cors');
// const allowedOrigins = [
//     'http://localhost:3333',
//     'http://localhost:8080',
// ];
const corsOptions = {
    // origin: function(origin, callback){
    //     // allow requests with no origin 
    //     // (like mobile apps or curl requests)
    //     if(!origin) return callback(null, true);
    //     if(allowedOrigins.indexOf(origin) === -1){
    //     var msg = 'The CORS policy for this site does not ' +
    //                 'allow access from the specified Origin.';
    //     return callback(new Error(msg), false);
    //     }
    //     return callback(null, true);
    // },
    origin: true,
}


//outer.use(cors(corsOptions));

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    console.log('hit api endpoint: ' + (new Date).toString());
    next();
});

// router.use( csrfProtection );

router.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN'){
        return next(err)
    } 
  
    // handle CSRF token errors here
    res.status(403)
    res.json({
        message: 'Form data tampered with',
    });
});

const taskRoutes = require('./api/taskRoutes')
router.use('/tasks', taskRoutes)

const userRoutes = require('./api/userRoutes')
router.use('/users', userRoutes)

const categoryRoutes = require('./api/categoryRoutes')
router.use('/categories', categoryRoutes);

const sessionRoutes = require('./api/sessionRoutes')
router.use('/session', sessionRoutes)

router.use((req, res) => {
    res.status(404).json({status: 'failed', message: 'Endpoint not found'})
})


module.exports = router;