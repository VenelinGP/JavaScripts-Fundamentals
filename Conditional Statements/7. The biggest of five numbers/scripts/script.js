taskName = "7. The biggest of five numbers";
message = "Write a script that finds the greatest of given 5 variables.<br/>Use nested if statements.<br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        c = ReadLine("Enter c: "),
        d = ReadLine("Enter d: "),
        e = ReadLine("Enter e: ");


    SetSolveButton(function () {
        CheckBigger(a.value, b.value, c.value, d.value, e.value)
    });

    function CheckBigger(a, b, c, d, e) {
        a *= 1;
        b *= 1;
        c *= 1;
        d *= 1;
        e *= 1;
        if (e > d) {
            d = e;
            if (d > c) {
                c = d;
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
            }
            else {
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
            }
        }
        else {
            if (d > c) {
                c = d;
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
            }
            else {
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
            }
        }
        WriteLine(Format('Result: {0}', a))
    }
}
