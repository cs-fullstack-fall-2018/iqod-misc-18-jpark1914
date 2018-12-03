var array = [[4, 5, 6], [2, 3, 4, 5], [7, 5, 3, 4, 1]];
var lastNum = 0;
var firstNum = 0;
var total = [];


function firstAndLast(anArray) {

    for (var i = 0; i < anArray.length; i++) {
        for (var j = 0; j < anArray[i].length; j++) {
            firstNum = anArray[i][0];
            lastNum = anArray[i][j];
        }
        total.push(firstNum + lastNum);
        console.log(total[i]);
    }
}

firstAndLast(array);
