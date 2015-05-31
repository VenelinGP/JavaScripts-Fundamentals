/**
 * Created by NoName on 5/30/2015.
 */
var btn = document.getElementById('OK-button');

function countElements(arr, num) {
    var count = 0,
        i;
    num *=1;
    for (i = 0; i < arr.length; i+=1){
        if (arr[i] === num){
            count +=1;
            }
        }
   return count;
}

btn.addEventListener('click', function() {
    var array = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
        searchedNumber = document.getElementById('number').value;
    var resultArea = document.getElementById('result');
    var resultArea = document.getElementById('testResult1');
    var resultArea = document.getElementById('testResult2');
    var resultArea = document.getElementById('testResult3');
    var countedNumber = countElements(array, searchedNumber);

    var testNumber1 = countElements(array,1),
        boolTest1 = false,
        testNumber2 = countElements(array,4),
        boolTest2 = false,
        testNumber3 = countElements(array,9),
        boolTest3 = false;

    if  (testNumber1 === 3){
        boolTest1 = true;
    }

    if  (testNumber2 === 5){
        boolTest2 = true;
    }
    if  (testNumber3 === 1){
        boolTest3 = true;
    }

    //console.log(countedNumber);

    result.innerHTML = 'Number '+searchedNumber+' is ' + countedNumber + ' times repeating in the Array';
    testResult1.innerHTML = 'Test 1: Number 1 is ' + testNumber1 + ' times : ' + boolTest1 ;
    testResult2.innerHTML = 'Test 2: Number 4 is ' + testNumber2 + ' times : ' + boolTest2 ;
    testResult3.innerHTML = 'Test 3: Number 9 is ' + testNumber3 + ' times : ' + boolTest3 ;
});