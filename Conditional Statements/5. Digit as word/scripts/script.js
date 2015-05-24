taskName = "5. Digit as word";
message = "Write a script that asks for a digit  (0-9) , and depending on the input, shows the digit as a word (in English).<br/>Print  'not a digit'  in case of invalid input. Use a  switch  statement.<br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: "),
        word;

    SetSolveButton(function () {
        Show(number.value)
    });

    function Show(number) {
        number *= 1;
        switch (number) {
            case 0:
                word = 'zero';
                break;
            case 1:
                word = 'one';
                break;
            case 2:
                word = 'two';
                break;
            case 3:
                word = 'three';
                break;
            case 4:
                word = 'four';
                break;
            case 5:
                word = 'five';
                break;
            case 6:
                word = 'six';
                break;
            case 7:
                word = 'seven';
                break;
            case 8:
                word = 'eight';
                break;
            case 9:
                word = 'nine';
                break;
            default:
                word = 'not a digit';
        }
        WriteLine(Format('Result: {0}', word))

    }
}

