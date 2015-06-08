/**
 * Created by NoName on 6/7/2015.
 */
/**
 * 1. Make person
 *
 * Write a function for creating persons.
 * Each person must have firstname, lastname, age and gender (true is female, false is male)
 * Generate an array with ten person with different names, ages and genders
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
        new makePerson('Damyan', 'Iliev', 28, 'male'),
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
    persons.forEach(function (item, index) {
        console.dir('index ' + index + ': '+ item.firstName + ' ' + item.lastName + ', ' + item.age + ' years old, ' + item.gender);
});




