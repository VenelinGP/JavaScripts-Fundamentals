taskName = "6. Quadratic equation";
message = "Write a script that reads the coefficients  a ,  b  and  c  of a quadratic equation ax2 + bx + c = 0 and solves it (prints its real roots).<br/>Calculates and prints its real roots.<br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        c = ReadLine("Enter c: ");

    SetSolveButton(function () {
        Calculate(a.value, b.value, c.value)
    });

    function Calculate(a, b, c) {
        a *= 1;
        b *= 1;
        c *= 1;
        var x1,
            x2;
        discriminant = (b * b) - (4 * a * c);
        
        if (discriminant < 0) {
            WriteLine(Format('no real roots'));
        }
        else if (discriminant === 0) {
            x1 = -(b / (2 * a));
            WriteLine(Format('x1 = x2 = {0}', x1));
        }
        else {
            discriminant = Math.sqrt((b * b) - (4 * a * c));
            x1 = (-b - discriminant) / (a * 2);
            x2 = (-b + discriminant) / (2 * a);
            WriteLine(Format('x1 = {0}; x2 = {1}', x1, x2));
        }
    }
}

