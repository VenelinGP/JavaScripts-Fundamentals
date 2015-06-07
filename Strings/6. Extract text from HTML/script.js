/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 6. Extract text from HTML
 *
 * Write a function that extracts the content of a html page given as text.
 * The function should return anything that is in a tag, without the tags.
 *
 * <html>
 *   <head>
 *       <title>Sample site</title>
 *   </head>
 *   <body>
 *       <div>text
 *           <div>more text</div>
 *           and more...
 *       </div>
 *       in body
 *   </body>
 * </html>
 */

var htmlStr = '<html>'+
            '<head>'+
                '<title>Sample site</title>'+
            '</head>'+
            '<body>'+
                '<div>text'+
                    '<div>more text</div>'+
                    'and more...'+
                '</div>'+
                'in body'+
            '</body>'+
            '</html>';

console.log(htmlStr);
console.log('Remove tags with checks: '+removeTags(htmlStr));
console.log('Remove tags with Regex:  '+removeTagsRegex(htmlStr));
function removeTags(str){
    var i=0,
        state = true,
        outStr = '',
        len = str.length;
    // Avtomat
    while(i < len){
        if (str[i] === '<' ){
            state = false;
        }
        else if(str[i] === '>' ){
            state = true;
        }
        else if( str[i] !=='>' && state){
            outStr+=str[i];
        }
        i +=1;
    }
    return outStr;
}
function removeTagsRegex(str){
    var outStr = str.replace( /<\D[a-z]+>/g, '');
    return outStr;
}
