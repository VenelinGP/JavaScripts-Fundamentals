/**
 * Created by NoName on 6/2/2015.
 */
/**
 * Problem 6.
 *
 * Write a function that groups an array of people by age, first or last name.
 * The function must return an associative array, with keys - the groups, and values - arrays with people in this groups
 * Use function overloading (i.e. just one function).
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
function groupPeopleBy (array, key){
    if (array.length === 0) {
        return null;
    }
    if (!array[0].hasOwnProperty(key)) {
        return null;
    }
    var groupedPeople = {},
        i;

    for (i in array) {
        // check if current object`s key value exists as property name in the resulting associative array
        // and if it doesn`t create it as empty array
        var groupProperty = array[i][key];

        if (!groupedPeople.hasOwnProperty(groupProperty)) {
            groupedPeople[groupProperty] = [];
        }
        // if current object`s key value exists as property name in the resulting associative array, add current object
        // to this property in the associative array. This property is also an array, because we would have created it
        // in the previous if statement
        groupedPeople[groupProperty].push(array[i]);
    }

    return groupedPeople;
}

var ivan = buildPerson('Ivan','Ivanov',27),
    petar = buildPerson('Petar','Petrov',22),
    stamat = buildPerson('Stamat','Stamatov',19);

var people = [ivan, petar, stamat];

var groupedByAge = groupPeopleBy(people, 'age');
console.log(groupedByAge);
var groupByFname = groupPeopleBy(people, 'firstName');
console.log(groupByFname);
var groupByLname = groupPeopleBy(people, 'lastName');
console.log(groupByLname);