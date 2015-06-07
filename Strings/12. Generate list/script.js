/**
 * Created by NoName on 6/7/2015.
 */

/**
 * 12. Generate list
 *
 * Write a function that creates a HTML <ul> using a template for every HTML <li>.
 * The source of the list should be an array of elements.
 * Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
 * */

/**
 * <div data-type="template" id="list-item">
 *      <strong>-{name}-</strong> <span>-{age}-</span>
 * </div>
 *
 * var people = [{name: 'Peter', age: 14},…];
 * var tmpl = document.getElementById('list-item').innerHtml;
 * var peopleList = generateList(people, template);
 * //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
 */
var template = '<strong>-{name}-</strong> <span>-{age}-</span>'
var people = [{name: 'Peter', age: 14},
              {name: 'Ivan', age: 16},
              {name: 'Stojan', age: 18}
            ];

var peopleList = generateList(people, template);
console.dir(peopleList);

function generateList(item, templ){
    var result = '',
        i;
        result +='<ul>';
        for(i = 0; i<item.length; i+=1){
            result +='<li>';
            result += replaceTemplate(item[i],templ);
            result +='</li>';
        }
    result +='</ul>';
    return result;
}

function replaceTemplate(it,templ){
    var newString = '';
    newString = templ.replace('-{name}-', it.name);
    newString = newString.replace('-{age}-', it.age);
    return newString;
}