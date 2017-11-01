const _ = {};

_.objEach = function(object, func){
    for(let key in object){
        if(object.hasOwnProperty(key)){
            func(key, object[key])
        }
    }
};

_.getTranslator = function(mappings){
    return (objIn) => {
        const objOut = {};
        _.objEach(mappings, function(oldKey, newKey){
            const rightVal = objIn[oldKey] || objIn[newKey];
            !!rightVal && (objOut[newKey] = rightVal);
        });
        return objOut;
    }
};

module.exports = _;