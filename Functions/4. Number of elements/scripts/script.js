/**
 * Created by NoName on 5/30/2015.
 */
var btn = document.getElementById('OK-button');

function countElements(htmlCode, search) {
    var count = 0,
        i;
    for (i = 0; i < htmlCode.length; i+=1){
       if (htmlCode[i] === search[0]){
           equal = false;
           for (var j = 0; j < search.length; j++) {
               if (htmlCode[i + j] === search[j]){
                   equal = true;
               }
               else{
                   equal = false;
                   break;
               }
           }
           if(equal){
               count +=1;
           }
       }
    }
    return count;
}
btn.addEventListener('click', function() {
    var markupCode = document.documentElement.innerHTML,
        searchedTag = '<div';
    var resultArea = document.getElementById('result');
    var countedTags = countElements(markupCode, searchedTag);
    //console.log(markupCode);
    //console.log(countedTags);
    result.innerHTML = 'Element &ltdiv&gt is ' + countedTags + ' times repeating in the index.html';
});