const exports = {};


// todo
// function getProperty(propName){
//     window.localStorage.getItem()
// }

function stringIsJson(string){
    const jsonRegex = /^("(((?=\\)\\(["\\\/bfnrt]|u[0-9a-fA-F]{4}))|[^"\\\0-\x1F\x7F]+)*")$/
    return jsonRegex.test(string);
}


exports.loggedIn = function(){
    // todo
    return true;
}




module.exports = exports;