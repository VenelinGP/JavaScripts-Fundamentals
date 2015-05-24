taskName = "2. Multiplication Sign";
message = "Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.<br/>Use a sequence of if operators <br/><br/>"

function Main(bufferElement) {

    var a = ReadLine("Enter a: "),
        b = ReadLine("Enter b: "),
        c = ReadLine("Enter c: "),
        temp;

    SetSolveButton(function () {
        Show(a.value, b.value, c.value)
    });

    function Show(a, b, c) {
        if (a > 0)
            if (b > 0) {
                if (c > 0) {
                    temp = '+';
                }
                else if (c < 0) {
                    temp = '-';
                }
                else {
                    temp = '0';
                }
            }
            else if (b < 0) {
                if (c > 0) {
                    temp = '-';
                }
                else if (c < 0) {
                    temp = '+';
                }
                else {
                    temp = '0';
                }
            }
            else {
                temp = '0';
            }
        else if (a < 0) {
            if (b > 0) {
                if (c > 0) {
                    temp = '-';
                }
                else if (c < 0) {
                    temp = '+';
                }
                else {
                    temp = '0';
                }
            }
            else if (b < 0) {
                if (c > 0) {
                    temp = '+';
                }
                else if (c < 0) {
                    temp = '-';
                }
                else {
                    temp = '0';
                }
            }
            else {
                temp = '0';
            }
        }
        else {
            temp = '0';
        }
        WriteLine(Format('Result: {0}', temp))
    }
}
