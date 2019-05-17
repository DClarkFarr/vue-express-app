const path = require('path');
module.exports = function(){
    return path.join( path.dirname(process.mainModule.filename), ...arguments);
}