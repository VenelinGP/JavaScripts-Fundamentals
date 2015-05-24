taskName = "4. Sort 3 numbers";
message = "Sort 3 real values in descending order.<br/>Use nested if statements. <br/><i>Note: Don’t use arrays and the built-in sorting functionality.</i><br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        c = ReadLine("Enter c: "),
        temp;

    SetSolveButton(function () {
        Sort(a.value, b.value, c.value)
    });

    function Sort(a, b, c) {
        a *= 1;
        b *= 1;
        c *= 1;

        if (c > b) {
            temp = b;
            b = c;
            c = temp;
            if (b > a) {
                temp = a;
                a = b;
                b = temp;
                if (c > b) {
                    temp = b;
                    b = c;
                    c = temp;
                }
            }
        }
        else {
            if (b > a) {
                temp = a;
                a = b;
                b = temp;
                if (c > b) {
                    temp = b;
                    b = c;
                    c = temp;
                }
            }

        }
        WriteLine(Format('Result: {0} {1} {2}', a, b, c))
    }
}
