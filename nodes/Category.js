const Node = require('./Node');

class Category extends Node {
    schema(){
        return {
            label: 'Category',
        }
    }
    static all(params){
        const instance = new this;
        const neo = instance.getNeo();

        return neo.all(instance.getLabel(), params, {name: 'ASC'})
    }
}


module.exports = Category;