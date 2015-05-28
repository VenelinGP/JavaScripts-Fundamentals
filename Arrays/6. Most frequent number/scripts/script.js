taskName = "6. Most frequent number";
message = "Write a script that finds the most frequent number in an array.<br/><br/>";

function Main(bufferElement) {
    WriteLine('var array = [ 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3 ];');

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt() {
        var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3, 5],
            length = array.length,
            currentNumber,
            currentCounter,
            maxCount = 0,
            number;

        for (var i = 0; i < length; i += 1) {
            currentNumber = array[i];
            currentCounter = 1;
            for (var j = i + 1; j < length; j += 1) {
                if (array[i] === array[j]) {
                    currentCounter += 1;
                }
            }
            if (maxCount < currentCounter) {
                number = currentNumber;
                maxCount = currentCounter;
            }
        }
        WriteLine('Result = ' + number + ' (' + maxCount + ' times)');
    }
}