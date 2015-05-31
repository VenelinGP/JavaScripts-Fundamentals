var btn = document.getElementById('OK-button');

function CheckIt(number) {

    if (!isNumeric(number)) {
        message='Value is not a number!';
    }
    else {
        var word = getLastDigit(number);
        message = word;
    }
    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    return message;
}

function getLastDigit(num) {
    var lastDigit = num % 10;

    switch (lastDigit) {
        case 0:
            message = 'zero';
            break;
        case 1:
            message = 'one';
            break;
        case 2:
            message = 'two';
            break;
        case 3:
            message = 'three';
            break;
        case 4:
            message = 'four';
            break;
        case 5:
            message = 'five';
            break;
        case 6:
            message = 'six';
            break;
        case 7:
            message = 'seven';
            break;
        case 8:
            message = 'eight';
            break;
        case 9:
            message = 'nine';
            break;
        default:
            message = 'Enter an Integer number!'
    }
    return message;
}

btn.addEventListener('click', function () {
    var inputValue = document.getElementById('number').value;
    var resultArea = document.getElementById('result');
    result.innerHTML = ('Result: ')+CheckIt(inputValue);
})