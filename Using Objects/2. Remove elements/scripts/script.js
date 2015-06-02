/**
 * Created by NoName on 6/1/2015.
 */
if(!Array.hasOwnProperty('removeValue')){
    Array.prototype.removeValue = function(element) {
        var i,
            length = this.length;

        for (i = 0; i < length; i += 1) {
            if (this[i] === element) {
                this.splice(i, 1);
                i -= 1;
                length -= 1;
            }
        }
    }
}
var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr);
var arr1 = arr.concat();
arr1.removeValue(1); //arr = [2,4,3,4,111,3,2,'1'];
console.log(arr1);
var arr1String = arr1.join(', ');
result.innerHTML = ('arr1 = ['+arr1+']');