/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 8. Replace tags
 *
 * Write a JavaScript function that replaces in a HTML document given as string all the tags <a href="…">…</a> with
 * corresponding tags [URL=…]…/URL].
 */

var input = '<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';

console.log(convertHref(input));

function convertHref(str){
    var i = 0,
        len =str.length,
        output = '',
        state = false;
while(i < len){
    if(str[i] === '<' && str[i+1] === 'a'){
        output += '[URL';
        i += 7;
        state = true;
        }
    else if (str[i] === '>' && state){
        output +=']';
        i +=1;
        state = false;
    }
    else if(str[i] === '<' && str[i+1] === '/' && str[i+2] === 'a'){
        output += '[/URL]';
        i += 4
    }
    else if (str[i]=== '"'){
        str[i] = '';
        i +=1;
    }
    else{
        output+=str[i];
        i +=1;
    }
}
    return output;
}
