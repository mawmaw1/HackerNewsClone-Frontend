const query = {};

const _ = require('./extensions');

const args = {
    url: 'http://139.59.211.36:8081',
    itemsPerpage: 25
};

function url(route, params){
    return [stripSlashes(args.url), stripSlashes(route)].join('/');
}

function stripSlashes(string){
    const startReg = /^\//;
    const endReg = /\/$/;

    return string.replace(startReg, '').replace(endReg, '');
}

function getSkipByPage(page){
    return args.itemsPerpage * (page - 1);
}

function getLimit(){
    return args.itemsPerpage;
}

const postTranslator = _.getTranslator({
    '_id': 'id',
    'username': 'username',
    'post_type': 'type',
    'pwd_hash': 'passwordHash',
    'post_title': 'title',
    'post_url': 'url',
    'post_parent': 'parent',
    'hanesst_id': 'hanesstId',
    'post_text': 'text',
    'created_at': 'createdAt',
    '__v': '__v',
    'comments': 'comments'
});

function translatePost(post){
    return postTranslator(post);
}

function translatePosts(posts){
    return posts.map(translatePost);
}

query.getPosts = function(page){

    return fetch(url('posts'), {
        method: 'POST',
        body: JSON.stringify({ skip: getSkipByPage(page), limit: getLimit()})
    }).then(response => {
        if(response.ok){
            return response.json();
        }else{
            console.error(response);
            return Promise.reject('Something went wrong :(')
        }
    }).then(posts => translatePosts(posts))
};



module.exports = query;