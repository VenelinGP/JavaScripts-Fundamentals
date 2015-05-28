taskName = "7. Binary search";
message = "Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.<br/><br/>";

function Main(bufferElement) {
    var searchedN;
    WriteLine('var array = [ 2, 3, 9, 10, 11, 12, 13, 14, 15, 25, 29, 32, 37, 42, 49 ];');
    var searchedN = ReadLine('Enter serched number from array: ');
    SetSolveButton(function () {
        CheckIt(searchedN.value);
    });

    function CheckIt(number) {
        var array = [2, 3, 9, 10, 11, 12, 13, 14, 15, 25, 29, 32, 37, 42, 49],
            maxIndex = array.length,
            minIndex = 0;

        while (maxIndex >= minIndex) {
            index = Math.round(minIndex + (maxIndex - minIndex) / 2);
            if (array[index] == number) {
                WriteLine('array[ ' + index + ' ] = ' + array[index]);
                return index;
            }
            else if (array[index] < number) {
                minIndex = index + 1;
                index = minIndex;
            }
            else {
                maxIndex = index - 1;
                index = maxIndex;
            }
        }
        WriteLine('Number is not found');
    }
}