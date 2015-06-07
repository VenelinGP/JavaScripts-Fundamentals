/**
 * Created by NoName on 6/3/2015.
 */
/**
 * 3. Sub-string in text
 *
 * Write a JavaScript function that finds how many times a substring is contained in a given text
 * (perform case insensitive search).
 */

 var subString = 'in',
 count = 0,
 text = 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.';

 function findSubstring (inputStr, subStr){
    var i
        len = inputStr.length;
        for(i =0; i<len; i += 1){
            var index = inputStr.indexOf(subStr,i);
            if (index > 0){
                i = index;
                count+=1;
            }
        }
     return count;
 }

var result = findSubstring(text,subString);
console.log(result)