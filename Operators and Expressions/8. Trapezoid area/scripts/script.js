taskName = "8. Trapezoid area";
message = "Write an expression that calculates trapezoid's area by given sides a and b and height h. <br/><br/>"

function Main(bufferElement) {

    WriteLine("Trapezoid's area (a, b, h)")
    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        height = ReadLine("Enter h: "),
        area;
    SetSolveButton(function () {
        CalculateTrapezoidArea(a.value, b.value, height.value)
    });

    function CalculateTrapezoidArea(a, b, height) {
        area = ((a * 1 + b * 1) * height / 2);
        WriteLine(Format("Trapezoid's area is: {0}!", area));
    }
}