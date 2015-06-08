/**
 * Created by NoName on 6/8/2015.
 */
/**
 * 4. Average age of females
 *
 * Write a function that calculates the average age of all females, extracted from an array of persons
 * Use Array#filter
 * Use only array methods and no regular loops (for, while)
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
var avgAgeOfFemales =
    persons.filter(function(item) {
        if(item.gender === 'female'){
            return item.gender;
        }
}).reduce(function(sum, item, i, arr) {
    var count = arr.length;
    return (sum + item.age / count);
}, 0);
console.log('The average age of all females: '+avgAgeOfFemales.toFixed(2)+ ' years');
