/**
 * Created by NoName on 5/29/2015.
 */
var btn = document.getElementById('OK-button');

function searchWord(text, word, casing) {
    var i,
        equal;
    if (casing !== "sensitive") {
        word = word.toLowerCase();
        text = text.toLowerCase();
    }
    var numerOfOccurrences = 0;
    for ( i = 0; i < text.length; i++) {
        if (text[i] === word[0]) {
            equal = false;
            for (var j = 0; j < word.length; j++) {
                if (text[i + j] === word[j])
                    equal = true;
                else {
                    equal = false;
                    break;
                }
            }
            if(equal)
                numerOfOccurrences++;
        }
    }
    return numerOfOccurrences;
}
btn.addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var word = document.getElementById('word').value;
    var checkbox = document.getElementById('sensitive');
    var resultArea = document.getElementById('result');
    var resultOfSearching;
    if(checkbox.checked === true) {
        resultOfSearching = searchWord(text, word, "sensitive");
    }
    else {
        resultOfSearching = searchWord(text, word);
    }
    result.innerHTML = "The word \" " + word + " \" is " + resultOfSearching + " times repeating in the text";
})