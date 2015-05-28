taskName = "5. Selection sort";
message = "Sorting an array means to arrange its elements in increasing order.<br/>Write a script to sort an array.<br/>Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.<br/><br/>";

function Main(bufferElement) {
    WriteLine('var array = [ 15, 12, 49, 9, 14, 2, 3, 11, 13, 11, 32, 37, 42, 29, 25 ];');

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt() {
        var array = [15, 12, 49, 9, 14, 2, 3, 11, 13, 11, 32, 37, 42, 29, 25],
            lenght = array.length,
            resultArray = [],
            xMin,
            number;

        for (var i = 0; i < lenght; i += 1) {
            xMin = 0;
            for (var j = 1; j < array.length; j += 1) {
                if (array[j] < array[xMin]) {
                    xMin = j
                }
            }
            if (xMin != j) {
                number = array.splice(xMin, 1);
                resultArray.push(number);
            }
        }
        WriteLine('Result = [ ' + resultArray.join(', ') + ' ]');
    }
}