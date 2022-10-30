let case1 = [1, 'data', '3', 'result']
let case2 = [ 'Bejo', 'has', '4', 'sport', 'car']

function arguments2(array: (string | number)[]): string {
    let result: string = "";
    array.map((array) => {
        result = result + " " + array;

    });
    return result;
}


console.log(arguments2(case1));
console.log(arguments2(case2));