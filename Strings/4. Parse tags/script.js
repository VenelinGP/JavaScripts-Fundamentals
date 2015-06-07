/**
 * Created by NoName on 6/3/2015.
 */
/**
 * 4. Parse tags
 *
 * You are given a text. Write a function that changes the text in all regions:
 *<upcase>text</upcase> to uppercase.
 *<lowcase>text</lowcase> to lowercase
 *<mixcase>text</mixcase> to mix casing(random)
 * */
var               str = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. We <mixcase>don\'t</mixcase> have <lowcase>ANYthing</lowcase> else.',
    strWithNestedTags = 'We are <mixcase>living in a <upcase>yellow</upcase> submarine</mixcase>. We <mixcase>don\'t</mixcase> have <lowcase>ANYthing</lowcase> else.';
console.log(changeText(str));
console.log(changeText(strWithNestedTags));

function changeText(text) {
    var i = 0,
        state = '',
        oldState='',
        outputStr = '',
        len = text.length;
    while (i < len) {
        if (text[i] === '<' && text[i + 1] === 'm') {
            i += 9;
            oldState = state;
            state = 'mix';
        }
        else if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'm') {
            i += 10;
            state = oldState;
            oldState = '';
        }
        else if (text[i] === '<' && text[i + 1] === 'u') {
            i += 8;
            oldState = state;
            state = 'up';
        }
        else if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'u') {
            i += 9;
            state = oldState;
            oldState = '';
        }
        else if (text[i] === '<' && text[i + 1] === 'l') {
            i += 9;
            oldState = state;
            state = 'low';
        }
        else if (text[i] === '<' && text[i + 1] === '/' && text[i + 2] === 'l') {
            i += 10;
            state = oldState;
            oldState = '';
        }
        if (state === 'mix') {
            var x,
                char;
            x = Math.floor(Math.random() * 2);
            if (x === 0) {
                char = text[i].toLowerCase();
            }
            else {
                char = text[i].toUpperCase();
            }
            outputStr += char;
            i += 1;
        }
        else if (state === 'up') {
            outputStr += text[i].toUpperCase();
            i += 1;
        }
        else if (state === 'low') {
            outputStr += text[i].toLowerCase();
            i += 1;
        }
        else {
            outputStr += text[i];
            i += 1;
        }
    }
    return outputStr;
}