/**
 * Created by NoName on 5/31/2015.
 */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function buildPoint(x, y) {
    if(!isNumber(x) || !isNumber(y)){
        throw new Error('X and Y should be numbers!')
    }
    return {
        x: x,
        y: y,
        toString: function getPoint() {
            return '['+this.x + ", " + this.y+']';
        }
    };
}

function buildLines(point1, point2) {
    return {
        p1: point1,
        p2: point2,
        length: lineDistance(point1, point2)
        };
}

function lineDistance (p1,p2){
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y;
    var distance = Math.sqrt(dx * dx + dy * dy);
    return distance;

}

function isTriangle (line1, line2, line3){

    var side1 = line1.length;
    var side2 = line2.length;
    var side3 = line3.length;

    var side1_check = side1 < (side2 + side3);
    var side2_check = side2 < (side1 + side3);
    var side3_check = side3 < (side2 + side3);

    return side1_check && side2_check && side3_check;
}

var p1 = buildPoint(2,3),
    p2 = buildPoint(7,8),
    p3 = buildPoint(7,8),
    p4 = buildPoint(2,8),
    p5 = buildPoint(2,8),
    p6 = buildPoint(2,3);

var l1 = buildLines(p1,p2),
    l2 = buildLines(p3,p4),
    l3 = buildLines(p5,p6);

console.log('Line 1 -> Length: '+ l1.length.toFixed(2));
console.log('Line 2 -> Length: '+ l2.length.toFixed(2));
console.log('Line 3 -> Length: '+ l3.length.toFixed(2));

console.log('Can form a triangle these three lines? '+ isTriangle(l1,l2,l3));

Line1.innerHTML = ('Point1'+p1.toString()+'-'+' Point2'+p2.toString()+' > '+'Line 1 : Length: '+ l1.length.toFixed(2));
Line2.innerHTML = ('Point3'+p3.toString()+'-'+' Point4'+p4.toString()+' > '+'Line 2 : Length: '+ l2.length.toFixed(2));
Line3.innerHTML = ('Point5'+p5.toString()+'-'+' Point6'+p6.toString()+' > '+'Line 3 : Length: '+ l3.length.toFixed(2));
result.innerHTML = ('Can form a triangle these three lines? '+ (isTriangle(l1,l2,l3)?' True':' False'));
