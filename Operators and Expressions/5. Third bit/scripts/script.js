taskName = "5. Third bit";
message = "Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer. <br/> The bits are counted from right to left, starting from bit #0. <br/> The result of the expression should be either 1 or 0. <br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: ");
    var mask = 1 << 3;
    var temp;
    var binaryNumber;

    SetSolveButton(function () {
        CheckThirdForBit(number.value)
    });

    function CheckThirdForBit(number) {
        temp = number & mask;
        temp = (temp === mask) ? 1 : 0;
        binaryNumber = Number(number).toString(2);
        binaryNumber = "0000000000000000".substr(binaryNumber.length) + binaryNumber;
        WriteLine(Format(' Number: {0} => {1}', number, binaryNumber));
        WriteLine(Format("The bit #3 in {0} is => {1}", number, temp));
        WriteLine('--------------------------------------------------');
    }
}