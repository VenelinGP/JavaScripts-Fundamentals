/**
 * Created by NoName on 6/3/2015.
 */
/**
 * 1. Reverse string
 *
 * Write a JavaScript function that reverses a string and returns it.
 * */

// First method
function reverse(inputStr) {
    var outputStr = '';
    for (var i = inputStr.length - 1; i >= 0; i--)
        outputStr += inputStr[i];
    return outputStr;
}

var inputStr = 'sample';
// Second method
var output = inputStr.split('').reverse().join('');

console.log(reverse(inputStr));
console.log(output);

Line1.innerHTML = ('var inputStr = \'sample\';');
Line2.innerHTML = ('reverse (inputStr) = ' + reverse(inputStr));
Line3.innerHTML = ('output = ' + output);
