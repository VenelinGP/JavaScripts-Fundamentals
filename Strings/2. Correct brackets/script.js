/**
 * Created by NoName on 6/3/2015.
 */
/**
 * 2. Correct brackets
 *
 * Write a JavaScript function to check if in a given expression the brackets are put correctly.
 * Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
 * */


function checkBrackets(inputStr){
    var len = inputStr.length,
        tempStr = '',
        emptyStr = '',
        i;
    for (i = 0; i < len; i +=1){
        if(inputStr[i] === '(' || inputStr[i] === ')'){
            tempStr += inputStr[i];
        }
    }
    while (tempStr.length !== emptyStr.length ){
        emptyStr = tempStr;
        tempStr = emptyStr.replace('()','');
    }

    return tempStr === '';
}

var str1='((a+b)/5-d)'; //true
var str2 = ')(a+b))' // false

console.log(checkBrackets(str1));
console.log(checkBrackets(str2));