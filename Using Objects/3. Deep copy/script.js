/**
 * Created by NoName on 6/1/2015.
 */
    /**
     * 3. Deep copy
     *
     * Write a function that makes a deep copy of an object.
     * The function should work for both primitive and reference types.
     *  */
var obj = {
        myString: 'String',
        number: 1,
        array: [1, 2, 3, 4, 5],
        objectProperty: {
            x: 6,
            y: 7,
            z: [8, 9, 10]
        }
    },
    result = '',
    prop;


function deepCopy(oldObject) {
    if (oldObject === null || typeof oldObject !== 'object') {
        return obj;
    }

    var copy = obj.constructor();
    for (var prop in oldObject) {
        copy[prop] = deepCopy(oldObject[prop]);
    }
    return copy;
}

console.log(obj);
var newObject = deepCopy(obj);
console.log(newObject);