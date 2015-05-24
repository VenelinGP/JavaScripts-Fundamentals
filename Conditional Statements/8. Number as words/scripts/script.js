taskName = "8. Number as words";
message = "Write a script that converts a number in the range [0…999] to words, corresponding to its English pronunciation.<br/><br/>"

function Main(bufferElement) {

    var number = ReadLine("Enter number: "),
        word;

    SetSolveButton(function () {
        CheckNumber(number.value)
    });

    function CheckNumber(number) {
        number *= 1;
        digital1 = number % 10;
        digital10 = ((number - digital1) / 10) % 10;
        digital100 = (((number - digital10 * 10 - digital1) / 100) % 10);
        //WriteLine(Format('{0} {1} {2}', digital100, digital10, digital1))
        var wordOfHundreds = '',
            wordOfTens = '';
        wordOfOnes = '';
        join = ' and ';
        space = ' ';

        switch (digital100) {
            case 1:
                wordOfHundreds = 'one hundred';
                break;
            case 2:
                wordOfHundreds = 'two hundred';
                break;
            case 3:
                wordOfHundreds = 'three hundred';
                break;
            case 4:
                wordOfHundreds = 'four hundred';
                break;
            case 5:
                wordOfHundreds = 'five hundred';
                break;
            case 6:
                wordOfHundreds = 'six hundred';
                break;
            case 7:
                wordOfHundreds = 'seven hundred';
                break;
            case 8:
                wordOfHundreds = 'eight hundred';
                break;
            case 9:
                wordOfHundreds = 'nine hundred';
                break;
            default:
                wordOfHundreds = '';
                join = '';
                break;
        }

        switch (digital10) {
            case 2:
                wordOfTens = 'twenty';
                break;
            case 3:
                wordOfTens = 'thirty';
                break;
            case 4:
                wordOfTens = 'forty';
                break;
            case 5:
                wordOfTens = 'fifty';
                break;
            case 6:
                wordOfTens = 'sixty';
                break;
            case 7:
                wordOfTens = 'seventy';
                break;
            case 8:
                wordOfTens = 'eighty';
                break;
            case 9:
                wordOfTens = 'ninety';
                break;
            default:
                wordOfTens = '';
                break;
        }

        switch (digital1) {
            case 1:
                wordOfOnes = 'one';
                break;
            case 2:
                wordOfOnes = 'two';
                break;
            case 3:
                wordOfOnes = 'three';
                break;
            case 4:
                wordOfOnes = 'four';
                break;
            case 5:
                wordOfOnes = 'five';
                break;
            case 6:
                wordOfOnes = 'six';
                break;
            case 7:
                wordOfOnes = 'seven';
                break;
            case 8:
                wordOfOnes = 'eight';
                break;
            case 9:
                wordOfOnes = 'nine';
                break;
            default:
                wordOfOnes = '';
                break;
        }
        if (digital100 === 0 && digital10 === 0 && digital1 === 0) {
            wordOfHundreds = '';
            wordOfTens = '';
            space = '';
            wordOfOnes = 'zero';
        }
        if (digital10 === 0 && digital1 === 0) {
            join = '';
        }
        if (digital10 == 0) {
            space = '';
        }
        if (digital10 == 1) {
            wordOfOnes = '';
            number = digital10 * 10 + digital1;
            switch (number) {
                case 11:
                    wordOfTens = 'eleven';
                    break;
                case 12:
                    wordOfTens = 'twelve';
                    break;
                case 13:
                    wordOfTens = 'thirteen';
                    break;
                case 14:
                    wordOfTens = 'fourteen';
                    break;
                case 15:
                    wordOfTens = 'fifteen';
                    break;
                case 16:
                    wordOfTens = 'sixteen';
                    break;
                case 17:
                    wordOfTens = 'seventeen';
                    break;
                case 18:
                    wordOfTens = 'eighteen';
                    break;
                case 19:
                    wordOfTens = 'nineteen';
                    break;
                default:
                    wordOfTens = 'ten';;
                    break;
            }
        }
        word = wordOfHundreds + join + wordOfTens + space + wordOfOnes;
        word = word.charAt(0).toUpperCase() + word.slice(1);
        WriteLine(Format('Result: {0}', word))
    }
}

