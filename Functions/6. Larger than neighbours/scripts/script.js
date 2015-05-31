/**
 * Created by NoName on 5/30/2015.
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

btn.addEventListener('click', function() {
    var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        searchedNumber = document.getElementById('position').value;
    var resultArea = document.getElementById('result');

    var checkElement1 = checkElement(array, searchedNumber);
    result.innerHTML = 'Number is bigger? - ' + checkElement1;
});