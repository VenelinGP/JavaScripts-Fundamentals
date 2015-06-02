/**
 * Created by NoName on 6/1/2015.
 */
/**
 * 5. Youngest person
 *
 * Write a function that finds the youngest person in a given array of people and prints his/hers full name
 * Each person has properties firstname, lastname and age.
 * */

function buildPerson(fname, lname, age) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        toString: function personToString() {
            return this.firstName + ' ' + this.lastName
        }
    };
}
function youngest(arr){
    var i,
        theYoung = arr[0];
    for(i = 1; i < arr.length; i +=1){
        if(arr[i].age < arr[i-1].age){
            theYoung = arr[i];
        }
    }
    return theYoung;
}
var ivan = buildPerson('Ivan','Ivanov',27),
    petar = buildPerson('Petar','Petrov',22),
    stamat = buildPerson('Stamat','Stamatov',19);

var people = [ivan, petar, stamat];
console.log(youngest(people).toString() + ' is ' + youngest(people).age + ' years old.');
