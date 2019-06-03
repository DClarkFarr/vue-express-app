const express = require('express');
const app = express();
const port = 3333;
const path = require('path');

const bodyParser = require('body-parser');
const HTMLing = require('htmling');
const cookieParser = require('cookie-parser');
const Connection = require('./utils/connection').Connection;

const multer = require('multer');

app.set('view engine', 'html');
app.set('views', 'views');
app.set('trust proxy', 1) // trust first proxy

app.use(express.static( path.join(__dirname, 'public') ));
app.use('/images', express.static( path.join(__dirname, 'public', 'images') ));
app.engine('html', HTMLing.express(__dirname + '/views/', {watch: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

//look for files in $_FILES['image']

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, (new Date().toISOString()) + '-' + file.originalname)
    },
});
const fileFilter = (req, file, cb) => {
    if(['image/png', 'image/jpeg', 'image/jpg'].indexOf(file.mimetype) > -1){
        cb(null, true);
    }else{
        cb(null, false);
    }
}
app.use(multer({storage: fileStorage, fileFilter: fileFilter, }).single('image'))
/**
 * Example usage
 * (req, res) => {
 *      if(req.file){
 *          let imageUrl = req.file.path;
 * 
 *          //store in database
 *      }else{
 *          throw new Error('No file selected')
 *      }
 * }
 */

app.use(cookieParser());

const webRouter = require('./routes/web');
const apiRouter = require('./routes/api');

app.use('/api', apiRouter);
app.use(webRouter);

/**
 * First start mongo
 *  $ mongod --config /usr/local/etc/mongod.conf
 */
Connection.connect(() => {
    app.listen(port, () => {
        console.log(`listeneinng on port ${port}!`)
    });
});