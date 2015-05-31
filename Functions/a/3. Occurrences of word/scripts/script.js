taskName = "3. Occurrences of word";
message = "Write a function that finds all the occurrences of word in a text.<br/>The search can be case sensitive or case insensitive.<br/>Use function overloading.<br/><br/>";

function Main(bufferElement) {
    var text = ReadLine('Enter a text: ');
    var word = ReadLine('Enter word: ');
    var caseSensitive = 

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