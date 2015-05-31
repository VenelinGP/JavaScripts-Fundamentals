/**
 * Created by NoName on 5/31/2015.
 */
var btn = document.getElementById('OK-button');

function checkElement(arr, pos) {
        var length = arr.length,
        i,
        isTrue = false;
        pos *=1;

    if(((pos - 1) >= 0) && ((pos + 1) < length)){
        if((arr[pos] > arr[pos-1])&&(arr[pos] > arr[pos+1])){
            isTrue = true;
            //console.log('1 ->' + isTrue);
        }
    }
    else if(pos === 0) {
        if (arr[pos] > arr[pos+1]){
            isTrue = true;
            //console.log('2 ' + isTrue);
        }
    }
    else if (pos === (length - 1)){

        if (arr[pos] > arr[pos - 1]){
            isTrue = true;
            //console.log('3 ->' + isTrue);
        }
    }
    else{
        isTrue = 'No such position!'
    }
    return isTrue;
}
function searchInArray(arr){
    var j,
        index = -1;
    for(j = 0; j< arr.length; j+=1) {
        console.log(j+'. '+checkElement(arr, j))
        if(checkElement(arr, j)){
            index =j;
            break;
        }
    }
    return index;
}
btn.addEventListener('click', function() {
    var firstArray = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        secondArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11],
        searchedNumber = document.getElementById('position').value;
    var resultArea1 = document.getElementById('result1'),
        resultArea2 = document.getElementById('result2');
    var checkElement1 = searchInArray(firstArray),
        checkElement2 = searchInArray(secondArray);
    result1.innerHTML = 'Founded first bigger number in first Array at possition : ' + checkElement1;
    result2.innerHTML = 'Founded first bigger number in second Array at possition : ' + checkElement2;
});