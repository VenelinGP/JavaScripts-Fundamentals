taskName = "9. Point in Circle and outside Rectangle";
message = "Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) <br />  and out of the rectangle R(top=1, left=-1, width=6, height=2).<br/><br/>"

function Main(bufferElement) {
    WriteLine('P (x,y)')
    var isTrueCircle,
        isTrueRectangle,
        position,
        isCond;
    var x = ReadLine("Enter x: ");
    var y = ReadLine("Enter y: ");

    SetSolveButton(function () {
        CheckPosition(x.value, y.value);
    });

    function CheckPosition(x, y) {
        position = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
        isTrueCircle = (position <= 3);
        isTrueRectangle = !(((x >= -1) && (x <= 5)) && ((y >= -1) && (y <= 1)));
        isCond = isTrueCircle && isTrueRectangle ? 'yes' : 'no';
        WriteLine(Format(' Point ({0}, {1}) => {2}', x, y, isCond));
        WriteLine('--------------------------------------------------');

    }

}
