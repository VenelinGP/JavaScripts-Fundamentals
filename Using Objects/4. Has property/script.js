/**
 * Created by NoName on 6/1/2015.
 */
/**
 * 4. Has property
 *
 * Write a function that checks if a given object contains a given property.
 */

var obj = {
    myString: 'String',
    myNumber: 5,
    array: [1, 2, 3, 4, 5],
    length: 7
}

function hasProperty(object, property){
        for (var key in object){
            if(key === property){
                return true;
            }
        }
        return false;
}
var hasProp = hasProperty(obj, 'length');
console.log(hasProp);