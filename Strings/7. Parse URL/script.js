/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 7. Parse URL
 *
 * Write a script that parses an URL address given in the format: [protocol]://[server]/[resource] and extracts from
 * it the [protocol], [server] and [resource] elements.
 * Return the elements in a JSON object.
 * */

var urlString = 'http://telerikacademy.com/Courses/Courses/Details/239';
console.log(parseURL(urlString));

function parseURL(urlStr){
    var startIndex = 0,
        endIndex = urlStr.indexOf(':'),
        len = urlStr.length,
        parsedUrl = {};
        parsedUrl.protocol = urlStr.substring(startIndex,endIndex);

        startIndex = endIndex+3;
        endIndex = urlStr.indexOf('/',startIndex);
        parsedUrl.server = urlStr.substring(startIndex,endIndex);

        startIndex = endIndex;
        parsedUrl.resource = urlStr.substr(startIndex,len);

    return parsedUrl;
}
