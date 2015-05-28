taskName = "3. Min/Max of sequence";
message = "Write a script that finds the max and min number from a sequence of numbers.<br/><br/>"

function Main(bufferElement) {
    WriteLine('var numbers = [ 24, 97, 10, 52, 26, 37, 89, 76, 85, 31, 73, 49, 59, 20, 15];');

    SetSolveButton(function () {
        CheckIt()
    });

    function CheckIt() {
        var i = 0,
            min = Number.MAX_VALUE,
            max = Number.MIN_VALUE;
        var numbers = [24, 97, 10, 52, 26, 37, 89, 76, 85, 31, 73, 49, 59, 20, 15];
        while (i < numbers.length) {
            if (numbers[i] < min) {
                min = numbers[i];
            }
            if (numbers[i] > max) {
                max = numbers[i];
            }
            i += 1;
        }
        WriteLine(Format('Min Value: {0}, Max Value: {1}', min, max))
    }
}