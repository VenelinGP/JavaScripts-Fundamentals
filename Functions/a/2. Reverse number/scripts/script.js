taskName = "2. Reverse number";
message = "Write a function that reverses the digits of given decimal number.<br/><br/>";

function Main(bufferElement) {
    var number = ReadLine('Enter a number: ');

    SetSolveButton(function () {
        CheckIt(number.value);
    });

    function CheckIt(number) {
        if (!isNumeric(number)) {
            WriteLine('Value is not a number!')
        }
        else {
            var result = reverseNumber(number);
            WriteLine(result);
        }
        function reverseNumber(num) {
            var n = num.toString(),
                i,
                reversedNum = '';
            var len = n.length;
            for (i = (len - 1); i >= 0; i -= 1) {
                reversedNum += n[i];
            }
            return reversedNum;
        }
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
}