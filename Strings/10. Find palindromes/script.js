/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 10. Find palindromes
 *
 * Write a program that extracts from a given text all palindromes, e.g. "ABBA", "lamal", "exe".
 * */

var str= 'ABBA, training, extracts, lamal, given, exe'

console.log(checkForPalindromes(str));

function checkForPalindromes(input){
    var i,
        words = input.split(','),
        palindromes = [];
    for(i = 0; i < words.length; i+=1){
        words[i] = words[i].trim();
        if(isPalindrome(words[i])){
            palindromes.push(words[i]);
        }
    }
    return palindromes;
}

function reverseString(str){
    return str.split('').reverse().join('');
}

function isPalindrome(str) {
    return str == reverseString(str);
}
