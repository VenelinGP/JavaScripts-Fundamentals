/**
 * Created by Venelin on 5/29/2015.
 */
var btn = document.getElementById('OK-button');

function CheckIt(number) {

    if (!isNumeric(number)) {
        message='Value is not a number!';
    }
    else {
        var result = reverseNumber(number);
        return result;
    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    return result;
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

btn.addEventListener('click', function () {
    var inputValue = document.getElementById('number').value;
    var resultArea = document.getElementById('result');
    result.innerHTML = ('Result: ')+CheckIt(inputValue);
})