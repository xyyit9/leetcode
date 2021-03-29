/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
    var arr=s.split(' ')
    return arr.join('%20');
}
console.log(replaceSpace("We are happy."))