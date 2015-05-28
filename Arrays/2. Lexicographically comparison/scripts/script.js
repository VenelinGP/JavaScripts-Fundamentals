taskName = "2. Lexicographically comparison";
message = "Write a script that compares two char arrays lexicographically (letter by letter)<br/><br/>";

function Main(bufferElement) {
    WriteLine('var firstArray = ["a", "b", "c", "z"];');
    WriteLine('var secondArray = ["a", "b", "c", "d"];');

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt(n) {
        var firstArray = ['a', 'b', 'c', 'z'];
        var secondArray = ['a', 'b', 'c', 'd'];
        var firstArrayLength = firstArray.length;
        var secondArrayLength = secondArray.length;
        var Length = firstArrayLength >=secondArrayLength? secondArrayLength : firstArrayLength;

        if (firstArrayLength > secondArrayLength) {
            WriteLine('Second array is earlier.');
        }

        else if (firstArrayLength === secondArrayLength) {
            for (var i = 0; i < Length; i++) {
                if (firstArray[i] > secondArray[i]) {
                    WriteLine('Second array is earlier.');
                    break;
                }
                else if (secondArray[i] > firstArray[i]) {
                    WriteLine('First array is earlier.');
                    break;
                }
                else {
                    WriteLine('Two chars are equal.');
                }
            }
        }
        else {
            WriteLine('First array is earlier.');
        }
        //WriteLine('array = [' + array.join(', ') + ']');
    }
}