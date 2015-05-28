taskName = "2. Numbers not divisible";
message = "Write a script that prints all the numbers from 1 to N, that are not divisible by 3 and 7 at the same time.<br/><br/>"

function Main(bufferElement) {

    var n = ReadLine("Enter N: ");

    SetSolveButton(function () {
        CheckIt(n.value)
    });

    function CheckIt(n) {
        var i = 1;
        while (i <= n) {
            if (!((i % 3 === 0) && (i % 7 === 0))) {
                WriteLine(i);
            }
            i += 1;

        }
    }
}