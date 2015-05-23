taskName = "1. Odd or Even";
message = "Write an expression that checks if given integer is odd or even. <br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: ");

    SetSolveButton(function () {
        CheckIsOdd(number.value)
    });

    function CheckIsOdd(number) {
        if (Number.isInteger(number * 1)) {
            WriteLine(Format("Number {0} is odd? => {1}!", number, (number % 2 ? 'true' : 'false')));
        }
    }
}