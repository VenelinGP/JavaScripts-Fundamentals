/**
 * Created by NoName on 6/8/2015.
 */
/**
 * 5. Youngest person
 *
 * Write a function that finds the youngest male person in a given array of people and prints his full name
 * Use only array methods and no regular loops (for, while)
 * Use Array#find
 * */

function makePerson(fname, lname, age, gender) {
    return {
        firstName: fname,
        lastName: lname,
        age: age,
        gender: gender,
        toString: function() {
            return this.firstname + ' ' + this.lastname ;
        }
    };
}
function createPersons() {
    var persons = [
        new makePerson('Boyana', 'Boycheva', 22, 'female'),
        new makePerson('Aleksander', 'Icherenski', 27, 'male'),
        new makePerson('Gergana', 'Dimitrova', 19, 'female'),
        new makePerson('Damyan', 'Iliev', 17, 'male'),
        new makePerson('Desislava', 'Petkova', 22, 'female'),
        new makePerson('Ilian', 'Iliyanov', 34, 'male'),
        new makePerson('Iva', 'Petrova', 25, 'female'),
        new makePerson('Petar', 'Petrov', 26, 'male'),
        new makePerson('Miroslava', 'Doneva', 22, 'female'),
        new makePerson('Nevena', 'Aleksandrova', 16, 'female')
    ];
    return persons;
}

persons = createPersons();


if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i += 1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    };
}

var youngestMale = persons.sort(function(a, b) {
        return a.age - b.age;
    }).find(function(item) {
    if (item.gender === 'male'){
        return item;
    }
});

console.log(youngestMale.firstName + ' ' + youngestMale.lastName +' age: '+youngestMale.age);

