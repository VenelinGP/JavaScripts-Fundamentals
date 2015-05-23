taskName = "7. Is prime";
message = "Write an expression that checks if given positive integer number n (n ≤ 100) is prime. <br/><br/>"

function Main(bufferElement) {
    var isPrime;
    var number = ReadLine("Enter number: ");

    SetSolveButton(function () {
        CheckPrime(number.value);
    });

    function CheckPrime(number) {
        var isPrime = true;
        if (number < 2) {
            isPrime = false;
        }
        if (number != Math.round(number)) {
            isPrime = false;
        }
        for (var i = 2; i <= Math.sqrt(number) ; i++) {

            if (number % i == 0) {
                isPrime = false;
            }
        }
        WriteLine(Format('Is prime? {0}', isPrime));
        WriteLine('--------------------------------------------------');
    }

}
