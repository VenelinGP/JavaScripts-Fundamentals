taskName = "3. Rectangle area";
message = "Write an expression that calculates rectangles area by given width and height. <br/><br/>"

function Main(bufferElement) {

    var height = ReadLine("Enter height: ");
    var width = ReadLine("Enter width: ");
    var area;
    SetSolveButton(function () {
        CalculateRectangleArea(height.value, width.value)
    });

    function CalculateRectangleArea(height, width) {
        area = height * width;
        WriteLine(Format("Rectangle area -> {0} * {1} = {2}!",height, width, area));
    }
}