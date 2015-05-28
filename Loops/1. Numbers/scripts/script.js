taskName = "1. Numbers";
message = "Write a script that prints all the numbers from 1 to N.<br/><br/>"

function Main(bufferElement) {

    var n = ReadLine("Enter N: ");

    SetSolveButton(function () {
        CheckIt(n.value)
    });

    function CheckIt(n) {
        for (var i = 1; i <= n; i+=1) {
            WriteLine(i);
        }
    }
}