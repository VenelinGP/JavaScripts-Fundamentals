/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 11. String format
 *
 * Write a function that formats a string using placeholders.
 * The function should work with up to 30 placeholders and all types.
 *
 * Examples
 * var str = stringFormat('Hello {0}!', 'Peter');
 * //str = 'Hello Peter!';
 *
 * var frmt = '{0}, {1}, {0} text {2}';
 * var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 * //str = '1, Pesho, 1 text Gosho'
 */

/** I get this function  from jsConsole */
function Format(str){
    var selfArguments = arguments;

    return str.replace(/\{(\d+)\}/g, function (match, arg) {
        return selfArguments[+arg + 1];
    })
}

/** This is my function */
 function stringFormat(str){
    var selfArguments = arguments,
        i,
        j;
    outputStr = selfArguments[0];
    if (selfArguments.length > 1) {
        for (var i = 1; i < selfArguments.length; i += 1)  {
            for (var j = 0; j < outputStr.length; j+=1) {
                outputStr = outputStr.replace('{' + (i - 1) + '}', selfArguments[i]);
            }
        }
    }
    return outputStr;
 }

var input1 = stringFormat('Hello {0}!', 'Peter');
console.dir(input1);

var frmt = '{0}, {1}, {0} text {2}';
var input2 = stringFormat(frmt, 1, 'Pesho', 'Gosho');
console.dir(input2);