taskName = "3. The biggest of Three";
message = "Write a script that finds the biggest of three numbers<br/>Use nested if statements.<br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        c = ReadLine("Enter c: ");

    SetSolveButton(function () {
        CheckBigger(a.value, b.value, c.value)
    });

    function CheckBigger(a, b, c) {
        a *= 1;
        b *= 1;
        c *= 1;

        if (c > b) {
            b = c;
            if (b > a) {
                a = b;
            }
        }
        else {
            if (b > a) {
                a = b;
            }
        }

        WriteLine(Format('Result: {0}', a))
    }
}
