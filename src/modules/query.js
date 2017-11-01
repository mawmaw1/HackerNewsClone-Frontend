const query = {};

const _ = require('./extensions');

const jsonHeaders = new Headers();

jsonHeaders.append("Content-Type", "application/json");

const args = {
    url: 'http://139.59.211.36:8081',
    itemsPerpage: 25
};

function url(route){
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
    'points':'points',
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
    const params = { skip: getSkipByPage(page), limit: getLimit()};
    let fullUrl = url('posts');
    fullUrl += `/${params.skip}/${params.limit}`;
    return fetch(fullUrl).then(response => {
        if(response.ok){
            return response.json();
        }else{
            console.error(response);
            return Promise.reject('Something went wrong :(')
        }
    }).then(posts => translatePosts(posts))
};

query.getPost = function(postId){
    let fullUrl = url('post');
    fullUrl += `/${postId}`;
    return fetch(fullUrl).then(response => {
        if(response.ok){
            return response.json();
        }else{
            console.error(response);
            return Promise.reject('Something went wrong :(')
        }
    }).then()
};

query.login = function(username, password){
    let fullUrl = url('login');
    return fetch(fullUrl, {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify({username, password})
    }).then(response => {
        if(!response.ok){
            return Promise.reject('Bad username/password');
        }
    })
};

query.register = function(username, password){
    let fullUrl = url('register');
    return fetch(fullUrl, {
        method: 'POST',
        headers: jsonHeaders,
        body: JSON.stringify({username, password})
    }).then(response => {
        if(!response.ok){
            return Promise.reject('Server error');
        }
    })
};

module.exports = query;