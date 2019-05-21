const getDb = require('../utils/connection').getDb;
const ObjectId = require('mongodb').ObjectId;


class Model {
    /**
     * Always extend this
     */
    schema(){
        return {
            source:     '',
            exclude:    [],
            inflate: [],
            fields: {
                
            },
        }
    }

    /**
     * Automatic methods
     */
    constructor(data){
        if(data){
            this.set(data)
        }
    }
    setId(){
        if(this._id){
            this.id = this._id;
        }
        delete this._id;
    }
    
    /**
     * Helper Get Methods
     */
    getId(){
        return this.id ? ObjectId(this.id) : false;
    }
    getSource(){
        return this.schema().source;
    }
    getFields(){
        return Object.entries(this.schema().fields).map(set => {
            return set[0];
        });
    }
    getInflate(){
        return [...this.schema().inflate]
    }
    getDefaults(){
        return {...this.schema().fields}
    }
    getExclude(){
        return [...this.schema().exclude];
    }
    getDb(){
        return getDb();
    }
    getCollection(){
        return this.getDb().collection(this.getSource())
    }

    /** Access/Chain Methods */
    set(data){
        if(data){
            for (const [key, value] of Object.entries(data)) {
                this[key] = value;
            };
            
            this.setId();
        }   
        return this;
    }
    
    /** Access/Response Methods */
    model(){
        const data = {};
        const exclude = this.getExclude();
        const fields = this.getFields();

        fields.forEach(field => {
            if( exclude.indexOf(field) < 0 ){
                data[field] = this[field];
            }
        })

        return data;
    }

    /** Access/Promise Methods */
    save(data){
        if(data){
            this.set(data)
        }
        return this.getCollection().updateOne({_id: this.getId() }, {$set: this.model()})
    }

    /** Access/Async Methods */
    async toObject(){
        const data = {
            id: this.id,
        };
        const exclude = this.getExclude();
        const fields = this.getFields();
        const inflate = this.getInflate();

        fields.forEach(field => {
            if( exclude.indexOf(field) < 0 ){
                data[field] = this[field];
            }
        })

        await this.inflate().then(() => {
            inflate.forEach(field  => {
                data[field] = this[field];
            });
        })
        
        return data;
    }
    async inflate(){
        /**
         * Do Whatever
         * Try not to load already loaded properties
         */    

        return this;
    }

    /** Access/Static Methods */
    static create(data){
        var obj = new this();

        obj.set( obj.getDefaults() );
        obj.set(data);
    
        return obj.getCollection().insertOne(obj).then(() => {
            obj.setId();

            return obj.inflate().then(() => {
                return obj;
            })  
        })
    }
    static collect(rows){
        return rows.map(row => {
            return (new this).set(row)
        })
    }

    static delete(id){
        return (new this).getCollection().deleteOne({_id: ObjectId(id) })
    }
    static find(id){     
        const obj = (new this); 
        return obj.getCollection().findOne({_id: ObjectId(id)}).then(data => {
            if(data){
                return obj.set(data);
            }
            return false;
        });
    }
}

module.exports = Model;