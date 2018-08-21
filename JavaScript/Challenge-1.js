/*JavaScript Challenge 1*/

function leadingZeros(x, y) {
    var strArr = [];
    var zeros = y - x.length;
    for (var i = 0; i < zeros; i++) {
        strArr.push(0);
    }
    strArr.push(x);
    return strArr.join('');
};