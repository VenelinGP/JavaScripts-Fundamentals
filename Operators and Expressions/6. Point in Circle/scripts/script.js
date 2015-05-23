taskName = "6. Point in Circle";
message = "Write an expression that checks if given point P(x, y) is within a circle K(O, 5). <br/><br/>"

function Main(bufferElement) {
    WriteLine('P (x,y)')
    var isTrue,
        position;
    var x = ReadLine("Enter x: ");
    var y = ReadLine("Enter y: ");

    SetSolveButton(function () {
        CheckPosition(x.value, y.value);
    });

    function CheckPosition(x, y) {
        position = Math.sqrt(x * x + y * y);
        isTrue = (position <= 5);
        WriteLine(Format(' Point is with in a circle K(O, 5): {0} ', isTrue));
        WriteLine('--------------------------------------------------');
    }

}
