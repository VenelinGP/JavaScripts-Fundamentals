taskName = "4. Maximal increasing sequence";
message = "Write a script that finds the maximal increasing sequence in an array.<br/><br/>";

function Main(bufferElement) {
    WriteLine('var array = [3, 1, 2, 5, 8, 2, 2, 4, 5, 1];');

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt() {
        var array = [3, 1, 2, 5, 8, 2, 2, 4, 5, 1],
            tempArr = [],
            maxSec = 0,
            resultArr = [];

        var longSec = 1;
        tempArr[0] = array[0];

        for (var i = 1; i < array.length; i += 1) {
            if (((array[i] - tempArr[longSec - 1]) > 0)) {
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