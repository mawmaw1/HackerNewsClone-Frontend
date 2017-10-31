const exported = {};

exported.getPostList = function(count){
    const postList = [];
    for(let i = 0; i < count; i++){
        postList.push(getNewPostItem({
            placement: i+1
        }))
    }
    return postList;
};

const data = {
    titles: [
        '#KrissenErFissen is really starting to spread... anyone know the origin of this?',
        'Look at this silly cat!',
        'Got a new car',
        'Any ideas for a halloween costume?'
    ],
    authors: [
        'manus1234',
        'fissen',
        'borumborum'
    ],
    urls: [
        'https://i.redd.it/eg30b5edivuz.jpg',
        'https://i.redd.it/sxtp594wiuuz.jpg',
        'http://imgur.com/UHjX6m6'
    ],
    dates: [
        '2017-10-30T08:30:00.12Z',
        '2017-10-30T09:15:00.12Z',
        '2017-10-30T10:00:00.12Z'
    ],
    numberOfComments: [
        5,
        8,
        13,
        21,
        44
    ],
    points: [
        8, 14, 22, 36, 58, 94
    ]
};

function getNewPostItem(options = {}){
    const postItem = {};

    postItem.placement = options.placement || 0;
    postItem.author = takeRandom(data.authors);
    postItem.title = takeRandom(data.titles);
    postItem.url = takeRandom(data.urls);
    postItem.points = takeRandom(data.points);
    postItem.numberOfComments = takeRandom(data.numberOfComments);
    postItem.date = takeRandom(data.dates);

    return postItem;
}

function takeRandom(array){
    const len = array.length;
    const index = Math.floor(Math.random() * len);
    return array[index];
}

module.exports = exported;