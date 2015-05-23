taskName = "2. Divisible by 7 and 5";
message = "Write a boolean expression that checks for given integer if it can be divided (without remainder) by 7 and 5 in the same time. <br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: ");

    SetSolveButton(function () {
        CheckIsOdd(number.value)
    });

    function CheckIsOdd(number) {
        WriteLine(Format("Is number {0} divisible by 7 and 5? => {1}!", number , ((number % (5 * 7)) === 0 ? 'true' : 'false')));
    }
}