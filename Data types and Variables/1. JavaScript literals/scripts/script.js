taskName = "1. JavaScript literals";
message = "Assign all the possible JavaScript literals to different variables. <br/><br/>"

function Main(bufferElement) {

    var number = 5,
        numberFloat = 0.5,
        text = "This is a string!",
        isTrue = true,
        isFalse = false,
        a,
        b = null;

    WriteLine(Format('var number = {0};',number));
    WriteLine(Format('var numberFloat = {0};', numberFloat));
    WriteLine(Format('var text = "{0}";', text));
    WriteLine(Format('var isTrue = {0};', isTrue));
    WriteLine(Format('var isFalse = {0};', isFalse));
    WriteLine('a is not defined:');
    WriteLine(Format('var a;', a));
    WriteLine('a');
    WriteLine(Format('{0}', a));
    WriteLine('b is null:');
    WriteLine(Format('var b = {0};', b));

}

