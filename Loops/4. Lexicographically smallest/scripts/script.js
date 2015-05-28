taskName = "4. Lexicographically smallest";
message = "Write a script that finds the lexicographically smallest and largest property in document, window and navigator objects.<br/><br/>"

function Main(bufferElement) {
    var smallest = 'zzz',
        largest = '',
        result,
        prop;

    SetSolveButton(function () {
        CheckIt()
    });

    function CheckIt() {
        for (prop in document) {
            if (prop < smallest) {
                smallest = prop;
            }
            if (prop > largest) {
                largest = prop;
            }
        }
        WriteLine(Format('Document: smallest: {0} ; largest: {1} ', smallest, largest))

        smallest = 'zzz';
        largest = '';
        for (prop in window) {
            if (prop < smallest) {
                smallest = prop;
            }
            if (prop > largest) {
                largest = prop;
            }
        }
        WriteLine(Format('Window: smallest: {0} ; largest: {1} ', smallest, largest))

        smallest = 'zzz';
        largest = '';
        for (prop in navigator) {
            if (prop < smallest) {
                smallest = prop;
            }
            if (prop > largest) {
                largest = prop;
            }
        }
        WriteLine(Format('Navigator: smallest: {0} ; largest: {1} ', smallest, largest))

    }
}