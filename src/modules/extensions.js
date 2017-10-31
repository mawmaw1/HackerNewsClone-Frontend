const _ = {};

_.objEach = function(object, func){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            func(key, object[key])
        }
    }
};


module.exports = _;