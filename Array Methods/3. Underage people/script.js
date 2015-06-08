/**
 * Created by NoName on 6/8/2015.
 */
/**
 * 3. Underage people
 *
 * Write a function that prints all underaged persons of an array of person
 * Use Array#filter and Array#forEach
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
function isSmallerThan18(item, index){
    if(item.age <18){
        console.log('index ' + index + ': '+ item.firstName + ' ' + item.lastName + ', ' + item.age + ' years old, ' + item.gender)
    }
}
console.log('Array with .filter:');
persons.filter(isSmallerThan18);
console.log('');
console.log('Array with .forEach:');
persons.forEach(isSmallerThan18);