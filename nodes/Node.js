const neo = require('../utils/neode')

class Node {
    schema(){
        return {
            label: '',
        }
    }
    getLabel(){
        return this.schema().label;
    }
    getNeo(){
        return neo
    }
}


module.exports = Node;