//var socket = io.connect('http://localhost:3333');

var devDomains = ['localhost:8081'];
var baseurl = '';
if( devDomains.indexOf(window.location.host) > -1 ){
    //dev host url
    baseurl = 'http://localhost:3333'
}

export default {
    connections: {

    },
    getConnection(slug){
        var key = this.slugToKey(slug);

        if(this.connections[key]){
            var c = this.connections[key];
            if(c.disconnected || !c.connected){
                console.log('trying to connect')
                c.connect();
            }
            return c;
        }

        return this.connections[key] = this.connect(slug)
    },
    connect(slug){
        slug = this.slugToSlug(slug)
        console.log('connecting to', baseurl + (slug.length ? '/' + slug : ''))
        return io.connect(baseurl + (slug.length ? '/' + slug : ''))
    },
    slugToSlug(slug){
        return (slug || '').replace(/^\//, '');
    },
    slugToKey(slug){
        return this.slugToSlug(slug).replace(/\//g, '_')
    },
};