taskName = "4. Typeof null";
message = "Create null, undefined variables and try typeof on them. <br/><br/>"

function Main(bufferElement) {

    var a,
        b = null;

    WriteLine('a is not defined:');
    WriteLine(Format('var a;', a));
    WriteLine('a');
    WriteLine(Format('{0}', a));
    WriteLine(Format('typeof a = {0};', typeof a));

    WriteLine('b is null:');
    WriteLine(Format('var b = {0};', b));
    WriteLine('b');
    WriteLine(Format('{0}', b));
    WriteLine(Format('typeof b = {0};', typeof b));
}

