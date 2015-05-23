taskName = "4. Third digit";
message = "Write an expression that checks for given integer if its third digit (right-to-left) is 7. <br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: ");
    var temp;

    SetSolveButton(function () {
        CheckThirdFor7(number.value)
    });

    function CheckThirdFor7(number) {
        temp = number / 100  | 0;
        temp = temp % 10 === 7;
        WriteLine(Format("Is third digit in {0} is 7? => {1}", number, temp));
    }
}