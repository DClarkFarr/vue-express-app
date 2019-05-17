const express = require('express');
const router = express.Router();

const root = require('../utils/root');
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true, ignoreMethods: ['HEAD', 'OPTIONS'] })
const cors = require('cors');


router.use(cors());

router.use((req, res, next) => {
    console.log('hit api endpoint: ' + (new Date).toString());
    next();
});

//router.use( csrfProtection );

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

const taskRoutes = require('./api/taskRoutes');
router.use('/tasks', taskRoutes);

const userRoutes = require('./api/userRoutes');
router.use('/users', userRoutes);

router.use((req, res) => {
    res.status(404).json({status: 'failed', message: 'Endpoint not found'})
});


module.exports = router;