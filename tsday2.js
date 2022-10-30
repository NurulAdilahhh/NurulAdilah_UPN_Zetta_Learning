var case1 = [1, 'data', '3', 'result'];
var case2 = ['Bejo', 'has', '4', 'sport', 'car'];
function arguments2(array) {
    var result = "";
    array.map(function (array) {
        result = result + " " + array;
    });
    return result;
}
console.log(arguments2(case1));
console.log(arguments2(case2));
