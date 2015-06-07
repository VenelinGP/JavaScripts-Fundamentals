/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 5. nbsp
 * Write a function that replaces non breaking white-spaces in a text with &nbsp;
 * */

var str = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>ANYthing</lowcase> else.';
console.log(changeWhiteSpace(str));
function changeWhiteSpace(text){
    outStr = text.replace(/ /g, '&nbsp');
    return outStr;
}
