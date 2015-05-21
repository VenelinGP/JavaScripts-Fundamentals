taskName = "3. Typeof variables";
message = "Try typeof on all variables you created.. <br/><br/>"

function Main(bufferElement) {

    var number = 5,
        numberFloat = 0.5,
        text = "This is a string!",
        isTrue = true,
        isFalse = false,
        a,
        b = null;

    Write('number = 5 =>        ');
    WriteLine(Format('typeof number = {0};', typeof number));
    Write('numberFloat = 0.5 => ')
    WriteLine(Format('typeof numberFloat = {0};', typeof numberFloat));
    Write('text = "This is a string!" => ')
    WriteLine(Format('typeof text = "{0}";', typeof text));
    Write('isTrue = true =>     ')
    WriteLine(Format('typeof isTrue = {0};', typeof isTrue));
    Write('isFalse = false =>     ')
    WriteLine(Format('typeof isFalse = {0};', typeof isFalse));
    Write('a is not defined. => ');
    WriteLine(Format('typeof a = {0};', typeof a));
    Write('b = null =>          ');
    WriteLine(Format('typeof b = {0};', typeof b));

}

