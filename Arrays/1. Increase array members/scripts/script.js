taskName = "1. Increase array members";
message = "Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.<br/>Print the obtained array on the console.<br/><br/>";

function Main(bufferElement) {
    WriteLine('var array = [];');
    var array = [];

    SetSolveButton(function () {
        CheckIt();
    });

    function CheckIt(n) {
        for (var i = 0; i < 20; i += 1) {
            array[i] = 5 * i;
        }
        WriteLine('array = [' + array.join(', ') + ']');
    }
}