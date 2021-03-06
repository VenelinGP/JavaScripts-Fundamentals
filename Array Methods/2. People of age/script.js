/**
 * Created by NoName on 6/8/2015.
 */
/**
 * 2. People of age
 *
 * Write a function that checks if an array of person contains only people of age (with age 18 or greater)
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
 function isGreaterThan18(item){
     item.age >=18
 }
persons = createPersons();
console.log(persons.every(isGreaterThan18));