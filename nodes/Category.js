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

    static async resetUserLikes(user, category){
        const instance = new this;
        const neo = instance.getNeo();

        return neo.cypher(`
            MATCH (u:User) WHERE id(u) = ${user.id()}
            MATCH (c:Category) WHERE id(c) = ${category.id()}
            MATCH (u)-[l:Liked]->(c)
            DELETE l
        `)
    }
    static async addUserLikes(user, category){
        const instance = new this
        const neo = instance.getNeo()

        const result = await neo.cypher(`
            MATCH (u:User) WHERE id(u) = ${user.id()}
            MATCH (c:Category) WHERE id(c) = ${category.id()}
            MERGE (u)-[l:Liked]->(c)
                ON MATCH SET 
                    l.interactions = l.interactions + 1, 
                    l.likes = l.likes + 1
                ON CREATE SET l.interactions = 1, l.likes = 1
            RETURN u, l, c
        `)

        const record = result.records[0]
        const u = record.get('u')
        const c = record.get('c')
        const l = record.get('l')

        let data = {
            user: u.properties,
            category: c.properties,
            likes: false,
        }

        if(l){
            data.likes = {
                likes: parseInt(l.properties.likes.toString()),
                interactions: parseInt(l.properties.interactions.toString()),
            }
        }

        data.user.id = parseInt(u.identity.toString())
        data.category.id = parseInt(c.identity.toString())

        return data

    }
    static async getUserLikes(userNode, categoryNode){
        const instance = new this;
        const neo = instance.getNeo();

        const result = await neo.cypher(`
            MATCH (u:User) WHERE id(u) = ${userNode.id()}
            MATCH (c:Category) WHERE id(c) = ${categoryNode.id()}
            OPTIONAL MATCH (u)-[l:Liked]->(c)
            RETURN u, l, c
        `)

        const record = result.records[0];
        const u = record.get('u');
        const c = record.get('c');
        const l = record.get('l');

        let data = {
            user: u.properties,
            category: c.properties,
            likes: false,
        };

        if(l){
            data.likes = {
                likes: parseInt(l.properties.likes.toString()),
                interactions: parseInt(l.properties.interactions.toString()),
            }
        }

        data.user.id = parseInt(u.identity.toString())
        data.category.id = parseInt(c.identity.toString())

        return data
    }
}


module.exports = Category;