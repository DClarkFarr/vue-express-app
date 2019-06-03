const multer = require('multer')


function toFilename(filename){
    let extIndex = filename.lastIndexOf('.');
    let ext = '';

    if(extIndex > -1){
        ext = filename.slice(extIndex)
        filename = filename.slice(0, extIndex).toLowerCase().replace(/[^a-z0-9]/, '-').replace(/_{2,}/, '-')
    }
    return filename + ext;
}

export default function(options){
    if(!options){
        options = {};
    }
    options = Object.assign({
        key: 'file',
        destination: 'files',
        filename: function(req, file){
            return 'upload-' + (new Date().toISOString()) + '-' + toFilename(file.originalname)
        },
        mimeTypes: [],
    }, options);
    
    const fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, options.destination)
        },
        filename: (req, file, cb) => {
            cb(null, options.filename(req, file))
        },
    });
    const fileFilter = (req, file, cb) => {
        if(!options.mimeTypes.length){
            return cb(null, true);
        }

        if(options.mimeTypes.indexOf(file.mimetype) > -1){
            cb(null, true);
        }else{
            cb(null, false);
        }
    }

    return multer({storage: fileStorage, fileFilter: fileFilter}).single('image')
}
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