taskName = "1. English digit";
message = "Write a function that returns the last digit of given integer as an English word.<br/><br/>";

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
            var word = getLastDigit(number);
            WriteLine(word);
        }
        function getLastDigit(num) {
            var lastDigit = num % 10,
                str;
            switch (lastDigit) {
                case 0:
                    str = 'zero';
                    break;
                case 1:
                    str = 'one';
                    break;
                case 2:
                    str = 'two';
                    break;
                case 3:
                    str = 'three';
                    break;
                case 4:
                    str = 'four';
                    break;
                case 5:
                    str = 'five';
                    break;
                case 6:
                    str = 'six';
                    break;
                case 7:
                    str = 'seven';
                    break;
                case 8:
                    str = 'eight';
                    break;
                case 9:
                    str = 'nine';
                    break;
                default:
                    str = 'Enter an Integer number!'
            }

            return str;
        }
        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
    }
}