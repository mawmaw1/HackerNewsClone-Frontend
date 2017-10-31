const query = {};

const _ = require('./extensions');

const args = {
    url: 'http://139.59.211.36:8081',
    itemsPerpage: 25
};

function url(route, params){
    return [stripSlashes(url), stripSlashes(route)].join('/');
}

function stripSlashes(string){
    const startReg = /^\//;
    const endReg = /\/$/;

    return string.replace(startReg, '').replace(endReg, '');
}

query.getPosts = function(page){
    fetch(url('post'))
        .then(response => {
            if(response.ok()){
                console.log('den er bra')
            }
        })
};

module.exports = query;