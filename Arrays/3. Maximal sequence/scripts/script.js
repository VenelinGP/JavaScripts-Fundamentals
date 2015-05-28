taskName = "3. Maximal sequence";
message = "Write a script that finds the maximal sequence of equal elements in an array.<br/><br/>";

function Main(bufferElement) {
    WriteLine('var array = ["2", "1", "1", "2", "3", "3", "2", "2", "2", "1"];');

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt(n) {
        var array = ['2', '1', '1', '2', '3', '3', '2', '2', '2', '1'],
        tempArr = [],
        maxSec = 0,
        resultArr = [];

        var longSec = 1;
        tempArr[0] = array[0];

        for (var i = 1; i < array.length; i += 1) {
            if (tempArr[0] === array[i]) {
                tempArr.push(array[i]);
                longSec += 1;
            }
            else {
                if (maxSec <= longSec) {
                    maxSec = longSec;
                    for (var k = 0; k < maxSec; k++) {
                        resultArr[k] = tempArr[k];
                    }
                    //WriteLine('array = [' + resultArr.join(', ') + '] : max:' + maxSec);
                    tempArr = [];
                    tempArr[0] = array[i];
                    longSec = 1;
                }
                else {
                    tempArr = [];
                    tempArr[0] = array[i];
                    longSec = 1;
                }
            }
        }
        WriteLine('Result = [' + resultArr.join(', ') + '] | Max Elements: ' + maxSec);
    }
}