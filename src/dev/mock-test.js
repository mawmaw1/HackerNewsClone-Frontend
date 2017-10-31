const mock = require('./mock');


const posts = mock.getPostList(5);

posts.forEach(element => {
    console.log(element)
});