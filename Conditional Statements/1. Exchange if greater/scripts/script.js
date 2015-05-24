taskName = "1. Exchange if greater";
message = "Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.<br/>As a result print the values a and b, separated by a space. <br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        temp;

    SetSolveButton(function () {
        CheckIt(a.value, b.value)
    });

    function CheckIt(a, b) {
        if (b < a) {
            temp = a;
            a = b;
            b = temp;
            WriteLine(Format('{0} {1}', a, b))
        }
        else {
            WriteLine(Format('{0} {1}', a, b))
        }

    }
}